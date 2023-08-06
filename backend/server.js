
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cors from 'cors'; // Import the cors middleware
const port = process.env.PORT || 5000;
import adminRoutes from './routes/adminRoutes.js';
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
    origin:'https://vwaran.me'
  }));

app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => res.send('Server is ready'));
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));

































// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// import cookieParser from 'cookie-parser';
// import {notFound, errorHandler} from './middleware/errorMiddleware.js'
// import connectDB from './config/db.js';
// const port = process.env.PORT || 5000;
// import adminRoutes from './routes/adminRoutes.js'
// connectDB();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));

// app.use(cookieParser());

// app.use('/api/admin', adminRoutes);

// app.get('/', (req,res) => res.send('Server is ready'));
// app.use(notFound);
// app.use(errorHandler);



// app.listen(port, () => console.log(`server is running on port ${port}`));