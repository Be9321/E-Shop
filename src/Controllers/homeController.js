import Product from '../models/productModel.js';

// Get all products
export const getProducts = async (req, res, next) => {
 try {
    const products = await Product.find();
    res.status(200).json(products);
 } catch (error) {
    next(error);
 }
};

// Create a new product
export const createProduct = async (req, res, next) => {
 try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
 } catch (error) {
    next(error);
 }
};

// Update an existing product
export const updateProduct = async (req, res, next) => {
 try {
    const { id } = req.params;
    const updates = req.body;
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
 } catch (error) {
    next(error);
 }
};

// Delete a product
export const deleteProduct = async (req, res, next) => {
 try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
 } catch (error) {
    next(error);
 }
};

// Find a product by ID
export const findProductById = async (req, res, next) => {
 try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
 } catch (error) {
    next(error);
 }
};
// export default {getProducts,createProduct,updateProduct,deleteProduct,findProductById};