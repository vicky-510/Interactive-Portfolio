import mongoose from 'mongoose';
import dns from 'dns';

// Some serverless platforms (e.g. Vercel) can't route IPv6 to Atlas, which
// makes the driver hang indefinitely instead of failing over to IPv4.
dns.setDefaultResultOrder('ipv4first');

export let lastConnectError = null;

let connectionPromise = null;

// Cached-promise pattern: on serverless (Vercel), calling connect() once at
// module load and never awaiting it lets the runtime freeze/orphan the
// in-flight connection between invocations. Callers must await connectDB()
// from inside request handling so the connection is guaranteed to actually
// run to completion (success or failure) within that invocation's lifetime.
const connectDB = () => {
    if (mongoose.connection.readyState === 1) {
        return Promise.resolve();
    }

    if (!connectionPromise) {
        connectionPromise = mongoose.connect(process.env.MONGO_URI, {
            family: 4,
            serverSelectionTimeoutMS: 8000,
        })
        .then((conn) => {
            lastConnectError = null;
            console.log(`MongoDB Connected: ${conn.connection.host} `);
        })
        .catch((error) => {
            lastConnectError = error.message;
            console.log(`Error: ${error.message}`);
            connectionPromise = null; // allow a retry on the next call
            if (!process.env.VERCEL) {
                process.exit(1);
            }
            throw error;
        });
    }

    return connectionPromise;
};

export default connectDB;
