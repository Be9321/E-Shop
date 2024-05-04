import { body } from "express-validator";

export const addProductValidation = [
    body("name", "Product name is required").not().isEmpty(),
    body("price", "Price is required and must be a number").isNumeric(),
    body("quantity", "Quantity is required and must be a number").isNumeric(),
    body("description", "Description is required").not().isEmpty(),
];

export const updateProductValidation = [
    body("name", "Product name is required").not().isEmpty(),
    body("price", "Price is required and must be a number").isNumeric(),
    body("quantity", "Quantity is required and must be a number").isNumeric(),
    body("description", "Description is required").not().isEmpty(),
];

export const createOrderValidation = [
    body("customerName", "Customer name is required").not().isEmpty(),
    body("customerEmail", "Customer email is required").not().isEmpty(),
    body("customerEmail", "Invalid email").isEmail(),
    body("products", "Products are required").not().isEmpty(),
    body("products.*.productId", "Each product must have a valid product ID").isMongoId(),
    body("products.*.quantity", "Each product must have a valid quantity").isNumeric(),
];

export const updateOrderValidation = [
    body("orderStatus", "Order status is required").not().isEmpty(),
    body("orderStatus", "Invalid order status").isIn(["Pending", "Shipped", "Delivered", "Cancelled"]),
];

export const addCustomerValidation = [
    body("firstName", "First name is required").not().isEmpty(),
    body("lastName", "Last name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty(),
    body("password", "Password should contain at least 8 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword()
];

export const updateCustomerValidation = [
    body("firstName", "First name is required").not().isEmpty(),
    body("lastName", "Last name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
];
