import mongoose from 'mongoose';

const recommendationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    recommendationType: {
        type: String,
        enum: ['product', 'service', 'content'],
        required: true
    },
    score: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

export default Recommendation;
