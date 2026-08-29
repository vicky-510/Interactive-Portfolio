
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import JobApplication from '../models/jobApplicationModel.js';
import { TERMINAL_STATUSES, INTERVIEW_STATUSES } from '../utils/jobStatusGroups.js';

const STORAGE_CAP_BYTES = 512 * 1024 * 1024;

const startOfWeek = () => {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(now.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday;
};

const startOfMonth = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
};

// @desc    Job application analytics for the dashboard
// route    GET /api/dashboard/stats
// @access  Private
const getDashboardStats = asyncHandler(async (req, res) => {
    const { range = 'monthly' } = req.query;

    const dateFormat = range === 'weekly' ? '%G-W%V' : range === 'yearly' ? '%Y' : '%Y-%m';

    const [facetResult] = await JobApplication.aggregate([
        {
            $facet: {
                totals: [
                    {
                        $group: {
                            _id: null,
                            totalJobs: { $sum: 1 },
                            inProgress: {
                                $sum: { $cond: [{ $in: ['$status', TERMINAL_STATUSES] }, 0, 1] },
                            },
                            interviews: {
                                $sum: { $cond: [{ $gt: ['$totalInterviewRounds', 0] }, 1, 0] },
                            },
                            offers: { $sum: { $cond: [{ $eq: ['$status', 'Offer'] }, 1, 0] } },
                            rejected: { $sum: { $cond: [{ $eq: ['$status', 'Rejected'] }, 1, 0] } },
                            appliedThisWeek: {
                                $sum: { $cond: [{ $gte: ['$appliedDate', startOfWeek()] }, 1, 0] },
                            },
                            appliedThisMonth: {
                                $sum: { $cond: [{ $gte: ['$appliedDate', startOfMonth()] }, 1, 0] },
                            },
                            totalInterviewRounds: { $sum: '$totalInterviewRounds' },
                            totalRoundsCleared: { $sum: '$roundsCleared' },
                            interviewStageCount: {
                                $sum: { $cond: [{ $in: ['$status', INTERVIEW_STATUSES] }, 1, 0] },
                            },
                        },
                    },
                ],
                statusDistribution: [{ $group: { _id: '$status', count: { $sum: 1 } } }],
                applicationsOverTime: [
                    {
                        $group: {
                            _id: { $dateToString: { format: dateFormat, date: '$appliedDate' } },
                            count: { $sum: 1 },
                        },
                    },
                    { $sort: { _id: 1 } },
                ],
                recentActivity: [
                    { $sort: { updatedAt: -1 } },
                    { $limit: 8 },
                    { $project: { company: 1, jobTitle: 1, status: 1, updatedAt: 1, nextActionDate: 1 } },
                ],
            },
        },
    ]);

    const totals = facetResult.totals[0] || {
        totalJobs: 0,
        inProgress: 0,
        interviews: 0,
        offers: 0,
        rejected: 0,
        appliedThisWeek: 0,
        appliedThisMonth: 0,
        totalInterviewRounds: 0,
        totalRoundsCleared: 0,
        interviewStageCount: 0,
    };

    const interviewConversionRate = totals.totalJobs
        ? Math.round((totals.interviews / totals.totalJobs) * 1000) / 10
        : 0;
    const applicationSuccessRate = totals.totalJobs
        ? Math.round((totals.offers / totals.totalJobs) * 1000) / 10
        : 0;
    const avgRounds = totals.interviews
        ? Math.round((totals.totalInterviewRounds / totals.interviews) * 10) / 10
        : 0;
    const interviewSuccessRate = totals.totalInterviewRounds
        ? Math.round((totals.totalRoundsCleared / totals.totalInterviewRounds) * 1000) / 10
        : 0;

    res.status(200).json({
        totals: {
            totalJobs: totals.totalJobs,
            inProgress: totals.inProgress,
            interviews: totals.interviews,
            offers: totals.offers,
            rejected: totals.rejected,
            appliedThisWeek: totals.appliedThisWeek,
            appliedThisMonth: totals.appliedThisMonth,
        },
        rates: {
            interviewConversionRate,
            applicationSuccessRate,
        },
        statusDistribution: facetResult.statusDistribution.map((s) => ({
            status: s._id,
            count: s.count,
        })),
        applicationsOverTime: facetResult.applicationsOverTime.map((p) => ({
            period: p._id,
            count: p.count,
        })),
        interviewAnalytics: {
            totalInterviews: totals.interviews,
            roundsCompleted: totals.totalInterviewRounds,
            roundsCleared: totals.totalRoundsCleared,
            avgRounds,
            successRate: interviewSuccessRate,
        },
        recentActivity: facetResult.recentActivity,
    });
});

// @desc    Database storage usage (approximate, from db.stats())
// route    GET /api/dashboard/storage
// @access  Private
const getStorageStats = asyncHandler(async (req, res) => {
    const stats = await mongoose.connection.db.stats();

    const usedBytes = (stats.storageSize || 0) + (stats.indexSize || 0);
    const percentUsed = Math.min(100, Math.round((usedBytes / STORAGE_CAP_BYTES) * 1000) / 10);

    res.status(200).json({
        usedBytes,
        capBytes: STORAGE_CAP_BYTES,
        availableBytes: Math.max(0, STORAGE_CAP_BYTES - usedBytes),
        percentUsed,
    });
});

export { getDashboardStats, getStorageStats };
