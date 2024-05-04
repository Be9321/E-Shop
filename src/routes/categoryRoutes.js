// src/routes/categoryRoutes.js
import express from 'express';
import {getCategory,getCategoryById,createCategory,updateCategory,deleteCategory} from '../Controllers/categoryController.js'; // Adjust the path as necessary


const categoryRouter = express.Router();

categoryRouter.get('/', getCategory);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.post('/', createCategory);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
