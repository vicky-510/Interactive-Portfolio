
import express from 'express';
const router = express.Router();

import { getDashboardStats, getStorageStats } from '../controllers/dashboardController.js';
import { protect } from '../middleware/authMiddleware.js';

router.get('/stats', protect, getDashboardStats);
router.get('/storage', protect, getStorageStats);

export default router;
