
import express from 'express';
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


router.post('/register', protect, registerAdmin);
router.post('/auth', authAdmin);
router.post('/Contact', contactAdmin);
router.post('/logout', logoutAdmin);


router.route('/profile').get( protect, getAdminProfile).put(protect, updateAdminProfile);




export default router;