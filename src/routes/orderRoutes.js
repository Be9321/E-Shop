import express from 'express';
import {
 createOrder,
 updateOrder,
 fetchOrderById,
 fetchAllOrders,
} from '../Controllers/orderController.js'; // Adjust the import path according to your project structure

const orderRouter = express.Router();

// Order routes
orderRouter.post('/orders', createOrder);
orderRouter.put('/orders/:orderId', updateOrder);
orderRouter.get('/orders/:orderId', fetchOrderById);
orderRouter.get('/orders', fetchAllOrders);

export default orderRouter;
