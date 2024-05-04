import express from 'express';
import {sendOrderUpdateNotification,sendOrderConfirmationNotification,sendShippingUpdateNotification,sendPasswordResetConfirmationNotification} 
from '../Controllers/notificationController.js'; // Adjust the import path according to your project structure

const notificarionRouter = express.Router();

// Notification routes
notificarionRouter.post('/notify/orderUpdate', sendOrderUpdateNotification);
notificarionRouter.post('/notify/orderConfirmation', sendOrderConfirmationNotification);
notificarionRouter.post('/notify/shippingUpdate', sendShippingUpdateNotification);
notificarionRouter.post('/notify/passwordResetConfirmation', sendPasswordResetConfirmationNotification);

export default notificarionRouter;
