// src/controllers/shoppingController.js
import Shopping from '../models/shoppingModel.js';

// Get all shopping items
export const getShoppingItem = async (req, res) => {
 try {
    const shoppingItems = await Shopping.find().populate('category');
    res.status(200).json(shoppingItems);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
};

// Get a single shopping item by ID
export const getShoppingItemById = async (req, res) => {
 try {
    const shoppingItem = await Shopping.findById(req.params.id).populate('category');
    if (!shoppingItem) {
      return res.status(404).json({ message: 'Shopping item not found' });
    }
    res.status(200).json(shoppingItem);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
};

// Create a new shopping item
export const createShoppingItem = async (req, res) => {
 const shoppingItem = new Shopping({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
 });

 try {
    const newShoppingItem = await shoppingItem.save();
    res.status(201).json(newShoppingItem);
 } catch (error) {
    res.status(400).json({ message: error.message });
 }
};

// Update a shopping item
export const updateShoppingItem = async (req, res) => {
 try {
    const shoppingItem = await Shopping.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!shoppingItem) {
      return res.status(404).json({ message: 'Shopping item not found' });
    }
    res.status(200).json(shoppingItem);
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
};

// Delete a shopping item
export const deleteShoppingItem = async (req, res) => {
 try {
    const shoppingItem = await Shopping.findByIdAndDelete(req.params.id);
    if (!shoppingItem) {
      return res.status(404).json({ message: 'Shopping item not found' });
    }
    res.status(200).json({ message: 'Shopping item deleted successfully' });
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
};
export default {getShoppingItem,getShoppingItemById,createShoppingItem,updateShoppingItem,deleteShoppingItem};