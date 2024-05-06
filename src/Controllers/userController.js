import userModel from "../models/userModel.js";
import { BadRequestError } from "../errors/index.js";
import { validationResult } from "express-validator";
import  jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs';
import {sendEmail} from "../utils/sendEmail.js";
import {otpGenerator} from "../utils/otp.js"
import UnauthorizedError from "../errors/unauthorisedError.js"
import Token from "../models/tokenModel.js";

export const getUserDetails = async (req, res) => {
 const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const user = await getUserDetails.findById(userId);
    res.status(200).json(user);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const updateUserDetails = async (req, res) => {
 const userId = req.user._id; // Assuming user is authenticated and user._id is available
 const updates = req.body;

 try {
    const user = await updateUserDetails.findByIdAndUpdate(userId, updates, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const changePassword = async (req, res) => {
 const userId = req.user._id; // Assuming user is authenticated and user._id is available
 const { currentPassword, newPassword } = req.body;

 try {
    const user = await changePassword.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcryptjs.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    const hashedPassword = await bcryptjs.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
 } catch (error) {
    res.status(500).send(error);
 }
};
export default {getUserDetails,updateUserDetails,changePassword};