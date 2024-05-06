// tokenRoutes.js
import express from 'express';
import { createToken, isTokenValid } from './tokenController';

const router = express.Router();

// Example route to create a token
router.post('/create', async (req, res) => {
 try {
    const { userId, type, expiresIn } = req.body;
    const token = await createToken(userId, type, expiresIn);
    res.status(200).json({ token: token.token });
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
});

// Example route to validate a token
router.get('/validate', async (req, res) => {
 try {
    const { token } = req.query;
    const isValid = await isTokenValid(token);
    res.status(200).json({ isValid });
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
});

export default router;
