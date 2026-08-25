
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

    } from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many login attempts, please try again later.' },
});

router.post('/register', protect, registerAdmin);
router.post('/auth', loginLimiter, authAdmin);
router.post('/Contact', contactAdmin);
router.post('/logout', logoutAdmin);


router.route('/profile').get( protect, getAdminProfile).put(protect, updateAdminProfile);




export default router;