import express from 'express';
import {
 getProducts,
 createProduct,
 uploadProductImage,
 findProductByEmail,
 findProductById,
 updateProduct,
 deleteProduct,
} from '../Controllers/productController.js'; 

const productRouter = express.Router();

// Product routes
productRouter.get('/list', getProducts);
productRouter.post('/add', createProduct);
productRouter.post('/product/upload', uploadProductImage);
productRouter.get('/product/:email', findProductByEmail);
productRouter.get('/getproduct/:id', findProductById);
productRouter.put('/update/:id', updateProduct);
productRouter.delete('/delete/:id', deleteProduct);

export default productRouter;
