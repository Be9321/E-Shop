// src/models/Shopping.js
import mongoose from 'mongoose';

const shoppingSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
 },
 description: {
    type: String,
    required: true,
 },
 price: {
    type: Number,
    required: true,
 },
 category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
 },
 image: {
    type: String,
    // This field can store a URL to an image representing the product
 },
 createdAt: {
    type: Date,
    default: Date.now,
    // This field automatically records the creation date of the product
 },
 updatedAt: {
    type: Date,
    // This field can be updated manually or automatically to track changes
 },
});

// Middleware to update the updatedAt field on document updates
shoppingSchema.pre('findOneAndUpdate', function(next) {
 this.update({}, { $set: { updatedAt: new Date() } });
 next();
});

const Shopping = mongoose.model('Shopping', shoppingSchema);

export default Shopping;
