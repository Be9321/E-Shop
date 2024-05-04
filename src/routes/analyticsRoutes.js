import express from 'express';
import  {trackUserEvent,trackPageView,trackButtonClick,trackFormSubmission,trackSearchQuery}from '../Controllers/analyticsController.js'; 

const analyricsRouter = express.Router();

// Analytics routes
analyricsRouter.post('/track/userEvent', trackUserEvent);
analyricsRouter.post('/track/pageView', trackPageView);
analyricsRouter.post('/track/buttonClick', trackButtonClick);
analyricsRouter.post('/track/formSubmission', trackFormSubmission);
analyricsRouter.post('/track/searchQuery', trackSearchQuery);

export default analyricsRouter;
