import express from 'express';
import {
 createOrder,
 updateOrder,
 fetchOrderById,
 fetchAllOrders,
} from '../Controllers/orderController.js'; 

const orderRouter = express.Router();

// Order routes
orderRouter.post('/add', createOrder);
orderRouter.put('/orders/:orderId', updateOrder);
orderRouter.get('/orders/:orderId', fetchOrderById);
orderRouter.get('/orders', fetchAllOrders);

export default orderRouter;
