import mongoose from 'mongoose';

export let lastConnectError = null;

const connectDB = async ()  => {

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        lastConnectError = null;
        console.log(`MongoDB Connected: ${conn.connection.host} `);
    }
    catch(error){
        lastConnectError = error.message;
        console.log(`Error: ${error.message}`);
        // Don't kill the process here: on Vercel this runs inside a serverless
        // function, and process.exit() crashes the whole invocation instead of
        // just failing the request. Let the caller/route handle the rejection.
        if (!process.env.VERCEL) {
            process.exit(1);
        }
    }

};

export default connectDB;