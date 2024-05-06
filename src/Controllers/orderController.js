import Order from '../models/orderModel.js';
import { sendEmail } from '../utils/sendEmail.js';

// Create a new order
export const createOrder = async (req, res) => {
 const { items } = req.body;
 //const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const order = new Order( req.body );
    await order.save();
    res.status(201).json(order);
    await sendEmail(req.body.items, "is pending", `Your OTP is ${sendEmail}`);

 } catch (error) {
    res.status(500).send(error);
 }
};

// Update an existing order
export const updateOrder = async (req, res) => {
 const { orderId } = req.params;
 const updates = req.body;
 const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const order = await Order.findOne({ _id: orderId, user: userId });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    Object.assign(order, updates);
    await order.save();
    res.status(200).json(order);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Fetch an order by ID
export const fetchOrderById = async (req, res) => {
 const { orderId } = req.params;
 const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const order = await Order.findOne({ _id: orderId, user: userId });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Fetch all orders for a user
export const fetchAllOrders = async (req, res) => {
 const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const orders = await Order.find({ user: userId });
    res.status(200).json(orders);
 } catch (error) {
    res.status(500).send(error);
 }
};
export default {createOrder, updateOrder, fetchOrderById, fetchAllOrders };