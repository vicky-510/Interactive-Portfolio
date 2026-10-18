
import express from 'express';
const router = express.Router();

import { getVisitCount, incrementVisitCount } from '../controllers/visitController.js';

router.route('/').get(getVisitCount).post(incrementVisitCount);

export default router;
