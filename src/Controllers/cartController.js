import Cart from '../models/cartModel.js';

// Add to cart
export const addToCart = async (req, res) => {
 const { productId, quantity } = req.body;
 const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
       const newCart = new Cart({ user: userId, products: [{ product: productId, quantity }] });
       await newCart.save();
       res.status(201).json(newCart);
    } else {
       // Logic to add product to existing cart
       res.status(200).json(cart);
    }
 } catch (error) {
    res.status(500).send(error);
 }
};

// Update a cart item
export const updateCartItem = async (req, res) => {
 const { productId, quantity } = req.body;
 const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    cart.products[productIndex].quantity = quantity;
    await cart.save();
    res.status(200).json(cart);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Delete a cart item
export const deleteCartItem = async (req, res) => {
 const { productId } = req.params;
 const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(p => p.product.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    cart.products.splice(productIndex, 1);
    await cart.save();
    res.status(200).json(cart);
 } catch (error) {
    res.status(500).send(error);
 }
};
export default {addToCart,updateCartItem,deleteCartItem}