
import asyncHandler from 'express-async-handler';
import Visit from '../models/visitModel.js';

const SITE_KEY = 'portfolio-site';
const BASE_COUNT = 1289;

const getOrCreateVisit = async () => {
    let visit = await Visit.findOne({ key: SITE_KEY });
    if (!visit) {
        visit = await Visit.create({ key: SITE_KEY, count: BASE_COUNT });
    }
    return visit;
};

// @desc    Get current visit count
// route    GET /api/visits
// @access  Public
const getVisitCount = asyncHandler(async (req, res) => {
    const visit = await getOrCreateVisit();
    res.status(200).json({ count: visit.count });
});

// @desc    Increment and return visit count
// route    POST /api/visits
// @access  Public
const incrementVisitCount = asyncHandler(async (req, res) => {
    await getOrCreateVisit();
    const visit = await Visit.findOneAndUpdate(
        { key: SITE_KEY },
        { $inc: { count: 1 } },
        { new: true }
    );
    res.status(200).json({ count: visit.count });
});

export { getVisitCount, incrementVisitCount };
