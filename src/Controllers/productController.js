import Product from '../models/productModel.js';
import upload from '../middlewares/uploadImage.js';

// Get all products
export const getProducts = async (req, res) => {
 try {
    const products = await Product.find();
    res.status(200).json(products);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Create a new product
export const createProduct = async (req, res) => {
//  const { name, price, description, image } = req.body;

 try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Upload product image
export const uploadProductImage = upload.single('image', async (req, res) => {
    const { name, price, description } = req.body;
    const image = req.file.path;
   
    try {
       const product = new Product({ name, price, description, image });
       await product.save();
       res.status(201).json(product);
    } catch (error) {
       res.status(500).send(error);
    }
});

// Find a product by email
export const findProductByEmail = async (req, res) => {
 try {
    const { email } = req.body;
    const product = await Product.findOne({ email });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Find a product by ID
export const findProductById = async (req, res) => {
 try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Update a product
export const updateProduct = async (req, res) => {
 try {
    const { id } = req.params;
    const updates = req.body;
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Delete a product
export const deleteProduct = async (req, res) => {
 try {
    const { id } = req.params;
    const product = await product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
 } catch (error) {
    res.status(500).send(error);
 }
};
export default {getProducts,createProduct,uploadProductImage,findProductByEmail,findProductById,updateProduct,deleteProduct
   ,deleteProduct};

