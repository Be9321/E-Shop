// Import the getRecommendations function from the recommendation service
import { getRecommendations as fetchRecommendationsService } from '../Services/recommendation.js';

// Fetch recommendations for a user with optional filters and pagination
export const fetchRecommendations = async (req, res) => {
 const userId = req.user._id; // Assuming user is authenticated and user._id is available
 const { category, minPrice, maxPrice, page, pageSize } = req.query; // Query parameters for filtering and pagination

 try {
    // Use the imported getRecommendations function from the recommendation service
    const recommendations = await fetchRecommendationsService(userId, { category, minPrice, maxPrice, page, pageSize });
    if (recommendations.length === 0) {
      return res.status(404).json({ message: 'No recommendations found for the given criteria.' });
    }
    res.status(200).json(recommendations);
 } catch (error) {
    res.status(500).send('Failed to fetch recommendations');
 }
};

// Example implementation of getRecommendations service
export const getRecommendations = async (userId, { category, minPrice, maxPrice, page = 1, pageSize = 10 }) => {
 // Fetch recommendations from your database or recommendation engine
 // This is a placeholder for your actual implementation
 let recommendations = [];

 // If a category is specified, filter the recommendations based on the category
 if (category) {
    recommendations = recommendations.filter(item => item.category === category);
 }

 // If price range is specified, filter the recommendations based on the price
 if (minPrice || maxPrice) {
    recommendations = recommendations.filter(item => {
      if (minPrice && item.price < minPrice) return false;
      if (maxPrice && item.price > maxPrice) return false;
      return true;
    });
 }

 // Implement pagination
 const startIndex = (page - 1) * pageSize;
 const endIndex = page * pageSize;
 recommendations = recommendations.slice(startIndex, endIndex);

 return recommendations;
};
export default  getRecommendations ;