import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const userSchema = new mongoose.Schema({
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
 // Add other fields as needed
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
   };
   

userSchema.pre('save', async function (next) {
 if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
 }
 next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
 return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);
