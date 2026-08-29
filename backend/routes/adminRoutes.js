
import express from 'express';
import rateLimit from 'express-rate-limit';
const router = express.Router();

import {
     authAdmin,
     registerAdmin,
     logoutAdmin,
     getAdminProfile,
     updateAdminProfile,
     contactAdmin,
     verifyPassword,

    } from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many login attempts, please try again later.' },
});

const verifyPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many attempts, please try again later.' },
});

router.post('/register', protect, registerAdmin);
router.post('/auth', loginLimiter, authAdmin);
router.post('/Contact', contactAdmin);
router.post('/logout', logoutAdmin);
router.post('/verify-password', protect, verifyPasswordLimiter, verifyPassword);


router.route('/profile').get( protect, getAdminProfile).put(protect, updateAdminProfile);




export default router;