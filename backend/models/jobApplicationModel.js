
import mongoose from "mongoose";

export const JOB_STATUSES = [
    'Applied',
    'Under Review',
    'HR Screening',
    'Technical Interview',
    'Managerial Interview',
    'HR Interview',
    'Offer',
    'Rejected',
    'Withdrawn',
    'On Hold',
];

export const JOB_TYPES = ['Full-time', 'Part-time', 'Internship', 'Contract', 'Freelance', 'Remote'];

const jobApplicationSchema = mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120,
        },

        jobTitle: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120,
        },

        jobType: {
            type: String,
            enum: JOB_TYPES,
            default: 'Full-time',
        },

        location: {
            type: String,
            trim: true,
            maxlength: 120,
        },

        appliedDate: {
            type: Date,
            required: true,
            default: Date.now,
        },

        hrName: {
            type: String,
            trim: true,
            maxlength: 100,
        },

        hrContact: {
            type: String,
            trim: true,
            maxlength: 100,
        },

        jobPostingUrl: {
            type: String,
            trim: true,
            maxlength: 500,
        },

        status: {
            type: String,
            enum: JOB_STATUSES,
            default: 'Applied',
        },

        totalInterviewRounds: {
            type: Number,
            default: 0,
            min: 0,
            max: 20,
        },

        roundsCleared: {
            type: Number,
            default: 0,
            min: 0,
            max: 20,
        },

        nextActionDate: {
            type: Date,
        },

        notes: {
            type: String,
            maxlength: 2000,
        },
    },
    {
        timestamps: true,
        collection: 'jobapplications',
    }
);

jobApplicationSchema.index({ status: 1, appliedDate: -1 });
jobApplicationSchema.index({ nextActionDate: 1 });

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

export default JobApplication;
