import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
 const { email, password } = req.body;

 try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
       return res.status(400).send('User already exists');
    }

    const user = new User({ email, password });
    await user.save();

    const token = user.generateAuthToken();
    res.status(201).send({ user, token });
 } catch (error) {
    res.status(500).send(error);
 }
};

export const login = async (req, res) => {
 const { email, password } = req.body;

 try {
    const user = await User.findOne({ email });
    if (!user) {
       return res.status(400).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
       return res.status(400).send('Invalid credentials');
    }

    const token = user.generateAuthToken();
    res.send({ user, token });
 } catch (error) {
    res.status(500).send(error);
 }
};
export default {register, login};