import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: false
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        trim: false
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
