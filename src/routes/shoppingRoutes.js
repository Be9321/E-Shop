// src/routes/shoppingRoutes.js
import express from 'express';
import {getShoppingItem,getShoppingItemById,createShoppingItem,updateShoppingItem,deleteShoppingItem} from '../Controllers/shoppingController.js'; // Adjust the path as necessary

const shoppingRouter = express.Router();

// Get all shopping items
shoppingRouter.get('/', getShoppingItem);

// Get a single shopping item by ID
shoppingRouter.get('/:id', getShoppingItemById);

// Create a new shopping item
shoppingRouter.post('/', createShoppingItem);

// Update a shopping item
shoppingRouter.put('/:id', updateShoppingItem);

// Delete a shopping item
shoppingRouter.delete('/:id', deleteShoppingItem);

export default shoppingRouter;
