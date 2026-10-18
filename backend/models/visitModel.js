
import mongoose from "mongoose";

const visitSchema = mongoose.Schema({

    key: {
        type: String,
        required: true,
        unique: true,
    },

    count: {
        type: Number,
        required: true,
        default: 0,
    },
},
    {
        timestamps: true,
        collection: 'visitStats',
});

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;
