import { sendEmail } from '../utils/sendEmail.js';

// Send order update notification
export const sendOrderUpdateNotification = async (req, res) => {
 const { orderId, email } = req.body;
 const subject = 'Your order has been updated';
 const text = `Your order with ID ${orderId} has been updated. Please check your order status.`;

 try {
    await sendOrderUpdateNotification(email, subject, text);
    res.status(200).send('Notification sent');
 } catch (error) {
    res.status(500).send('Failed to send notification');
 }
};

// Send order confirmation notification
export const sendOrderConfirmationNotification = async (req, res) => {
 const { orderId, email } = req.body;
 const subject = 'Your order has been confirmed';
 const text = `Your order with ID ${orderId} has been successfully placed. Thank you for your purchase!`;

 try {
    await sendOrderConfirmationNotification(email, subject, text);
    res.status(200).send('Order confirmation sent');
 } catch (error) {
    res.status(500).send('Failed to send order confirmation');
 }
};

// Send shipping update notification
export const sendShippingUpdateNotification = async (req, res) => {
 const { orderId, email, shippingStatus } = req.body;
 const subject = 'Your order shipping status update';
 const text = `Your order with ID ${orderId} has been updated to: ${shippingStatus}.`;

 try {
    await sendShippingUpdateNotification(email, subject, text);
    res.status(200).send('Shipping update sent');
 } catch (error) {
    res.status(500).send('Failed to send shipping update');
 }
};

// Send password reset confirmation notification
export const sendPasswordResetConfirmationNotification = async (req, res) => {
 const { email } = req.body;
 const subject = 'Password reset request received';
 const text = `We received your request to reset your password. Please check your email for further instructions.`;

 try {
    await sendPasswordResetConfirmationNotification(email, subject, text);
    res.status(200).send('Password reset confirmation sent');
 } catch (error) {
    res.status(500).send('Failed to send password reset confirmation');
 }
};
export default {sendOrderUpdateNotification,sendOrderConfirmationNotification,sendShippingUpdateNotification,sendPasswordResetConfirmationNotification};