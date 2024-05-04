import express from 'express';
import {
 getUserDetails,
 updateUserDetails,
 changePassword,
} from '../Controllers/userController.js'; // Adjust the import path according to your project structure

const userRouter = express.Router();

// User routes
userRouter.get('/user', getUserDetails);
userRouter.put('/user', updateUserDetails);
userRouter.put('/user/password', changePassword);

export default userRouter;
