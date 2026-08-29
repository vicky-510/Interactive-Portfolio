import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import jobApplicationRoutes from './routes/jobApplicationRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const port = process.env.PORT || 5000;

const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim());

if (!process.env.VERCEL) {
  connectDB();
}

const app = express();

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.VERCEL) {
  // Ensure the connection is actually awaited within this invocation's
  // lifetime instead of firing unawaited at module load (see config/db.js).
  app.use(async (req, res, next) => {
    try {
      await connectDB();
      next();
    } catch (error) {
      next(error);
    }
  });
}

app.use('/api/admin', adminRoutes);
app.use('/api/jobs', jobApplicationRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

if (!process.env.VERCEL) {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
}

export default app;
