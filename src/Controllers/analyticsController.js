import { trackEvent } from '../Services/analytics.js';

// Track a user event
export const trackUserEvent = async (req, res) => {
 const { userId, eventName, eventData } = req.body;

 try {
    trackEvent(userId, eventName, eventData);
    res.status(200).send('Event tracked');
 } catch (error) {
    res.status(500).send('Failed to track event');
 }
};

// Track page views
export const trackPageView = async (req, res) => {
 const { userId, pageName } = req.body;

 try {
    trackEvent(userId, 'page_view', { pageName });
    res.status(200).send('Page view tracked');
 } catch (error) {
    res.status(500).send('Failed to track page view');
 }
};

// Track button clicks
export const trackButtonClick = async (req, res) => {
 const { userId, buttonName } = req.body;

 try {
    trackEvent(userId, 'button_click', { buttonName });
    res.status(200).send('Button click tracked');
 } catch (error) {
    res.status(500).send('Failed to track button click');
 }
};

// Track form submissions
export const trackFormSubmission = async (req, res) => {
 const { userId, formName } = req.body;

 try {
    trackEvent(userId, 'form_submission', { formName });
    res.status(200).send('Form submission tracked');
 } catch (error) {
    res.status(500).send('Failed to track form submission');
 }
};

// Track search queries
export const trackSearchQuery = async (req, res) => {
 const { userId, searchQuery } = req.body;

 try {
    trackEvent(userId, 'search_query', { searchQuery });
    res.status(200).send('Search query tracked');
 } catch (error) {
    res.status(500).send('Failed to track search query');
 }
};
export default {trackUserEvent,trackPageView,trackButtonClick,trackFormSubmission,trackSearchQuery};