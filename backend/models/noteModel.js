
import mongoose from "mongoose";

export const NOTE_CATEGORIES = [
    'Interview Preparation',
    'Companies',
    'Technical Notes',
    'HR Notes',
    'Career',
    'Personal',
];

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },

        content: {
            type: String,
            required: true,
            maxlength: 5000,
        },

        category: {
            type: String,
            enum: NOTE_CATEGORIES,
            default: 'Personal',
        },

        pinned: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        collection: 'notes',
    }
);

noteSchema.index({ pinned: -1, updatedAt: -1 });

const Note = mongoose.model('Note', noteSchema);

export default Note;
