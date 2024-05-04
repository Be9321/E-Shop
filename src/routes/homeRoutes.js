import Router from 'express';
const route = Router();

import {
 getProducts,
 createProduct,
 updateProduct,
 deleteProduct,
 findProductById,
} from '../Controllers/homeController.js'; // Adjust the import path according to your project structure


// Product routes
route.get('/products', getProducts);
route.post('/products', createProduct);
route.put('/products/:id', updateProduct);
route.delete('/products/:id', deleteProduct);
route.get('/products/:id', findProductById);

export default route;
