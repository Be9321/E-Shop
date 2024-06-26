import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
 const { name,email, password,address,phoneNumber } = req.body;

 try {
    const existingUser = await User.findOne( req.body );
    if (existingUser) {
       return res.status(400).send('User already exists');
    }

    const user = new User({ email, password,name,address,phoneNumber });
    await User.save();

    const token = user.generateAuthToken();
    res.status(201).send({ User, token });
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