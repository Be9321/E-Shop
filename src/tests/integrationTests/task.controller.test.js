// onlineShop.test.js

import express from 'express';
import request from 'supertest';
import App from "../../Services/ExpressApp.js"; // Adjust the path as necessary

const app = express();
await App(app);

describe("Integration tests for online shop", () => {
    it("GET /api/v1/products - Success - List Products", async () => {
        const { body, statusCode } = await request(app).get("/api/v1/products");
        
        // Assuming the response is an array of products
        expect(Array.isArray(body)).toBe(true);
        expect(statusCode).toBe(200);
    });

    it("POST /api/v1/cart - Success - Add Item to Cart", async () => {
        const productId = "123"; // Example product ID
        const { body, statusCode } = await request(app)
            .post("/api/v1/cart")
            .send({ productId, quantity: 1 });
        
        let expectedBody = {
            "message": "Item added to cart successfully!"
        }
        let expectedStatusCode = 200;

        expect(body).toEqual(expectedBody);
        expect(statusCode).toBe(expectedStatusCode);
    });

    it("PUT /api/v1/cart/:productId - Success - Update Item in Cart", async () => {
        const productId = "123"; // Example product ID
        const { body, statusCode } = await request(app)
            .put(`/api/v1/cart/${productId}`)
            .send({ quantity: 2 });
        
        let expectedBody = {
            "message": "Item updated in cart successfully!"
        }
        let expectedStatusCode = 200;

        expect(body).toEqual(expectedBody);
        expect(statusCode).toBe(expectedStatusCode);
    });

    it("DELETE /api/v1/cart/:productId - Success - Remove Item from Cart", async () => {
        const productId = "123"; // Example product ID
        const { body, statusCode } = await request(app)
            .delete(`/api/v1/cart/${productId}`);
        
        let expectedBody = {
            "message": "Item removed from cart successfully!"
        }
        let expectedStatusCode = 200;

        expect(body).toEqual(expectedBody);
        expect(statusCode).toBe(expectedStatusCode);
    });

    it("POST /api/v1/checkout - Success - Checkout", async () => {
        const { body, statusCode } = await request(app)
            .post("/api/v1/checkout")
            .send({ paymentMethod: "creditCard", shippingAddress: "123 Main St" });
        
        let expectedBody = {
            "message": "Checkout successful!"
        }
        let expectedStatusCode = 200;

        expect(body).toEqual(expectedBody);
        expect(statusCode).toBe(expectedStatusCode);
    });
});
