// One-off CLI script to create the initial Admin account directly in MongoDB Atlas.
// Usage: node backend/seed/seedAdmin.js "you@example.com" "yourStrongPassword" "Your Name" "+10000000000"
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import Admin from '../models/userModel.js';

const [email, password, name, phone] = process.argv.slice(2);

if (!email || !password || !name || !phone) {
  console.error('Usage: node backend/seed/seedAdmin.js <email> <password> <name> <phone>');
  process.exit(1);
}

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log(`Admin with email ${email} already exists (id: ${existing._id}). Aborting.`);
    await mongoose.disconnect();
    process.exit(1);
  }

  const admin = await Admin.create({ name, email, phone, password });
  console.log(`Admin created: ${admin.email} (id: ${admin._id})`);

  await mongoose.disconnect();
  process.exit(0);
};

run().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
