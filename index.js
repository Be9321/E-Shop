import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import swagger from './src/doc/swagger.json' assert { type: 'json' };
const app = express();

//cors policy configurations 
const corsOptions = {
    allowedHeaders: ["Authorization","Content-Type","Content-Type"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'DELETE'],
    origin: ['http://localhost:3000']
}

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://belyseurwidukunda:Urwidukunda0255@cluster0.slzzze3.mongodb.net/EShop1")
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err));

// Routes
import allRoute from './src/routes/index.js';

// app.js
import upload from './src/middlewares/uploadImage.js';
import swaggerUi from 'swagger-ui-express'

//import * as err from './src/middlewares/errorhandler.js'
// app.post('/upload', upload, (req, res) => {
//  // req.file is the `file` object
//  // req.body will hold the text fields, if there were any
//  res.send('File uploaded successfully');
// });



// Add this line to include authentication routes
app.use('/api/',allRoute)

// Swagger Documentation
import swaggerDocument from './src/doc/swagger.json' assert{type: 'json'};
import swaggerJSDoc from 'swagger-jsdoc';
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error Handling
// app.use(err);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
