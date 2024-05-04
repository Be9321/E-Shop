// src/models/Category.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
    unique: true,
 },
 description: {
    type: String,
    required: true,
 },
 // Additional fields
 parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    // This field allows for nested categories, useful for creating a hierarchy
 },
 image: {
    type: String,
    // This field can store a URL to an image representing the category
 },
 createdAt: {
    type: Date,
    default: Date.now,
    // This field automatically records the creation date of the category
 },
 updatedAt: {
    type: Date,
    // This field can be updated manually or automatically to track changes
 },
});

// Middleware to update the updatedAt field on document updates
categorySchema.pre('findOneAndUpdate', function(next) {
 this.update({}, { $set: { updatedAt: new Date() } });
 next();
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
