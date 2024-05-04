import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    eventData: {
        type: Object,
        required: true
    },
    eventTimestamp: {
        type: Date,
        default: Date.now
    }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

export default Analytics;
