import express from 'express';
import { handleChatMessage } from '../Controllers/chatControllers.js';
import authMiddleware from '../middlewares/authorization.js';

const chatRouter = express.Router();

chatRouter.post('/send-message', authMiddleware, handleChatMessage);

export default chatRouter;
