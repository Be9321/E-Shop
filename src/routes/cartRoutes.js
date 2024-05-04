import express from 'express';
import {addToCart,updateCartItem,deleteCartItem} from '../Controllers/cartController.js';

const cartRouter = express.Router();

// Cart routes
cartRouter.post('/cart', addToCart);
cartRouter.put('/cart/:productId', updateCartItem);
cartRouter.delete('/cart/:productId', deleteCartItem);

export default cartRouter;
