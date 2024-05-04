import express from "express";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';

import configurations from "../configs/index.js";
import allRoutes from "../routes/index.js";
import documentation from '../docs/documentation.js';
import ErrorHandlerMiddleware from "../middlewares/ErrorHandlerV2.js";

// Cors policy configuration.
const corsOptions = {
    allowedHeaders: ["Authorization","Content-Type"],
    methods: ["GET", "POST", "UPDATE" ],
    origin: ["http://localhost:5173", configurations.CLIENT_APP],
}

// Initialize Express app
const app = express();

// Apply CORS policy
app.use(cors(corsOptions));

// Parse JSON request bodies
app.use(express.json());

// Serve Swagger UI
app.use('/api-doc', swaggerUi.serve);
app.use('/api-doc', swaggerUi.setup(documentation));

// Define routes
app.use('/api/v1', allRoutes);

// Error handling middleware
app.use(ErrorHandlerMiddleware);

// Start the server
const PORT = configurations.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
