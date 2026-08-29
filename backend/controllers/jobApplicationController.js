
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import JobApplication, { JOB_STATUSES, JOB_TYPES } from '../models/jobApplicationModel.js';
import { TERMINAL_STATUSES } from '../utils/jobStatusGroups.js';

const SORTABLE_FIELDS = ['appliedDate', 'company', 'status', 'roundsCleared', 'updatedAt'];

const buildQuickStats = async () => {
    const [row] = await JobApplication.aggregate([
        {
            $group: {
                _id: null,
                total: { $sum: 1 },
                active: {
                    $sum: { $cond: [{ $in: ['$status', TERMINAL_STATUSES] }, 0, 1] },
                },
                interviews: {
                    $sum: { $cond: [{ $gt: ['$totalInterviewRounds', 0] }, 1, 0] },
                },
                offers: {
                    $sum: { $cond: [{ $eq: ['$status', 'Offer'] }, 1, 0] },
                },
                rejected: {
                    $sum: { $cond: [{ $eq: ['$status', 'Rejected'] }, 1, 0] },
                },
            },
        },
    ]);

    return {
        total: row?.total ?? 0,
        active: row?.active ?? 0,
        interviews: row?.interviews ?? 0,
        offers: row?.offers ?? 0,
        rejected: row?.rejected ?? 0,
    };
};

const validateJobPayload = (body, { partial = false } = {}) => {
    const errors = [];

    if (!partial || body.company !== undefined) {
        if (!body.company || !String(body.company).trim()) errors.push('Company is required');
    }
    if (!partial || body.jobTitle !== undefined) {
        if (!body.jobTitle || !String(body.jobTitle).trim()) errors.push('Job title is required');
    }
    if (body.jobType !== undefined && !JOB_TYPES.includes(body.jobType)) {
        errors.push('Invalid job type');
    }
    if (body.status !== undefined && !JOB_STATUSES.includes(body.status)) {
        errors.push('Invalid status');
    }

    return errors;
};

// @desc    List job applications (search/filter/sort/paginate)
// route    GET /api/jobs
// @access  Private
const getJobs = asyncHandler(async (req, res) => {
    const {
        search,
        status,
        location,
        jobType,
        sortBy = 'appliedDate',
        sortDir = 'desc',
        page = 1,
        limit = 10,
    } = req.query;

    const filter = {};

    if (search) {
        const regex = new RegExp(String(search).trim(), 'i');
        filter.$or = [{ company: regex }, { jobTitle: regex }, { hrName: regex }];
    }
    if (status) filter.status = status;
    if (location) filter.location = new RegExp(String(location).trim(), 'i');
    if (jobType) filter.jobType = jobType;

    const sortField = SORTABLE_FIELDS.includes(sortBy) ? sortBy : 'appliedDate';
    const sort = { [sortField]: sortDir === 'asc' ? 1 : -1 };

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 10));

    const [data, totalCount, quickStats] = await Promise.all([
        JobApplication.find(filter)
            .sort(sort)
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum),
        JobApplication.countDocuments(filter),
        buildQuickStats(),
    ]);

    res.status(200).json({
        data,
        pagination: {
            page: pageNum,
            limit: limitNum,
            totalCount,
            totalPages: Math.ceil(totalCount / limitNum) || 1,
        },
        quickStats,
    });
});

// @desc    Get a single job application
// route    GET /api/jobs/:id
// @access  Private
const getJobById = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error('Invalid job id');
    }

    const job = await JobApplication.findById(req.params.id);

    if (!job) {
        res.status(404);
        throw new Error('Job application not found');
    }

    res.status(200).json(job);
});

// @desc    Create a job application
// route    POST /api/jobs
// @access  Private
const createJob = asyncHandler(async (req, res) => {
    const errors = validateJobPayload(req.body);
    if (errors.length) {
        res.status(400);
        throw new Error(errors.join(', '));
    }

    const job = await JobApplication.create(req.body);
    res.status(201).json(job);
});

// @desc    Update a job application (requires action token)
// route    PUT /api/jobs/:id
// @access  Private
const updateJob = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error('Invalid job id');
    }

    const errors = validateJobPayload(req.body, { partial: true });
    if (errors.length) {
        res.status(400);
        throw new Error(errors.join(', '));
    }

    const job = await JobApplication.findById(req.params.id);
    if (!job) {
        res.status(404);
        throw new Error('Job application not found');
    }

    Object.assign(job, req.body);
    const updated = await job.save();

    res.status(200).json(updated);
});

// @desc    Delete a job application (requires action token)
// route    DELETE /api/jobs/:id
// @access  Private
const deleteJob = asyncHandler(async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error('Invalid job id');
    }

    const job = await JobApplication.findById(req.params.id);
    if (!job) {
        res.status(404);
        throw new Error('Job application not found');
    }

    await job.deleteOne();

    res.status(200).json({ _id: req.params.id });
});

export { getJobs, getJobById, createJob, updateJob, deleteJob };
