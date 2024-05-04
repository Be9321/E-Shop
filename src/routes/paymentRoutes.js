import express from 'express';
import {
 createPaymentIntent,
 handleSuccessfulPayment,
 handleFailedPayment,
 confirmPaymentStatus,
} from '../Controllers/paymentController.js'; // Adjust the import path according to your project structure

const paymentRouter = express.Router();

// Payment routes
paymentRouter.post('/payment/create', createPaymentIntent);
paymentRouter.post('/payment/success', handleSuccessfulPayment);
paymentRouter.post('/payment/failure', handleFailedPayment);
paymentRouter.post('/payment/status', confirmPaymentStatus);

export default paymentRouter;
