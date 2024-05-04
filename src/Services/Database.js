import mongoose from "mongoose";
import configurations from "../configs/index.js";

// Connect to MongoDB
export const connectToDatabase = () => {
    mongoose.connect(configurations.MONGODB_CONNECTION_STRING.toString(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB", err));
};

// Define a schema for a product
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
});

// Create a model from the schema
const Product = mongoose.model("Product", productSchema);

// Export the Product model for use in other parts of the application
export { Product };

// Call the function to connect to the database
connectToDatabase();
