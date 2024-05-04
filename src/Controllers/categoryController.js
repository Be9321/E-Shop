// src/controllers/categoryController.js
import Category from '../models/categoryModel.js';

// Get all categories
export const getCategory = async (req, res) => {
 try {
    const categories = await Category.find();
    res.status(200).json(categories);
 } catch (error) {
    res.status(500).json({ message: 'Failed to fetch categories' });
 }
};

// Get a single category by ID
export const getCategoryById = async (req, res) => {
 try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
 } catch (error) {
    res.status(500).json({ message: 'Failed to fetch category' });
 }
};

// Create a new category
export const createCategory = async (req, res) => {
 const category = new Category({
    name: req.body.name,
    description: req.body.description,
 });

 try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
 } catch (error) {
    res.status(400).json({ message: 'Failed to create category' });
 }
};

// Update a category
export const updateCategory = async (req, res) => {
 try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
 } catch (error) {
    res.status(500).json({ message: 'Failed to update category' });
 }
};

// Delete a category
export const deleteCategory = async (req, res) => {
 try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
 } catch (error) {
    res.status(500).json({ message: 'Failed to delete category' });
 }
};
export default {getCategory,getCategoryById,createCategory,updateCategory,deleteCategory}