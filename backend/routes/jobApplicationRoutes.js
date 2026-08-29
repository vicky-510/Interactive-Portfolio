
import express from 'express';
const router = express.Router();

import {
    getJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/jobApplicationController.js';
import { protect } from '../middleware/authMiddleware.js';
import { requireActionToken } from '../middleware/actionTokenMiddleware.js';

router.route('/').get(protect, getJobs).post(protect, createJob);

router
    .route('/:id')
    .get(protect, getJobById)
    .put(protect, requireActionToken, updateJob)
    .delete(protect, requireActionToken, deleteJob);

export default router;
