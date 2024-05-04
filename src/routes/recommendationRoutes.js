import express from 'express';
import { fetchRecommendations } from '../Controllers/recommendationController.js'; // Adjust the import path according to your project structure

const recommendationRouter = express.Router();

// Recommendation route
recommendationRouter.get('/recommendations', fetchRecommendations);

export default recommendationRouter;
