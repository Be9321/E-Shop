import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create a new payment intent
export const createPaymentIntent = async (req, res) => {
 const { amount } = req.body;

 try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'rwf'
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
 } catch (error) {
    res.status(500).send(error);
 }
};

// Handle successful payments
export const handleSuccessfulPayment = async (req, res) => {
 const { paymentIntentId } = req.body;

 try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    if (paymentIntent.status === 'succeeded') {
      // Perform any necessary actions, such as updating the order status in your database
      res.status(200).send('Payment succeeded');
    } else {
      res.status(400).send('Payment failed');
    }
 } catch (error) {
    res.status(500).send(error);
 }
};

// Handle failed payments
export const handleFailedPayment = async (req, res) => {
 const { paymentIntentId } = req.body;

 try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status === 'requires_payment_method' || paymentIntent.status === 'requires_confirmation') {
      // The payment did not succeed, handle accordingly
      res.status(400).send('Payment failed');
    } else {
      // The payment was processed but did not succeed, handle accordingly
      res.status(400).send('Payment failed');
    }
 } catch (error) {
    res.status(500).send(error);
 }
};

// Confirm payment status
export const confirmPaymentStatus = async (req, res) => {
 const { paymentIntentId } = req.body;

 try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.status(200).json({ status: paymentIntent.status });
 } catch (error) {
    res.status(500).send(error);
 }
};
export default {createPaymentIntent,handleSuccessfulPayment,handleFailedPayment,confirmPaymentStatus};