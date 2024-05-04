import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const getUserDetails = async (req, res) => {
 const userId = req.user._id; // Assuming user is authenticated and user._id is available

 try {
    const user = await User.findById(userId);
    res.status(200).json(user);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const updateUserDetails = async (req, res) => {
 const userId = req.user._id; // Assuming user is authenticated and user._id is available
 const updates = req.body;

 try {
    const user = await User.findByIdAndUpdate(userId, updates, { new: true });
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
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
 } catch (error) {
    res.status(500).send(error);
 }
};
export default {getUserDetails,updateUserDetails,changePassword};