/**
 * Calculates the total price of items in a shopping cart, applying any discounts.
 *
 * @param {Array} cartItems - An array of cart items, each with a price, quantity, and optional discount.
 * @returns {number} The total price of the items in the cart after applying discounts.
 * @example
 * const cartItems = [
 *   { price: 100, quantity: 2, discount: 10 }, // 10% discount
 *   { price: 200, quantity: 1 } // No discount
 * ];
 * const totalPrice = calculateTotalPrice(cartItems);
 * console.log(totalPrice); // Output: 360
 */
export const calculateTotalPrice = (cartItems) => {
    let totalPrice = 0;
   
    cartItems.forEach(item => {
       let itemPrice = item.price * item.quantity;
       if (item.discount) {
         itemPrice -= itemPrice * (item.discount / 100); // Apply discount
       }
       totalPrice += itemPrice;
    });
   
    return totalPrice;
   };
   