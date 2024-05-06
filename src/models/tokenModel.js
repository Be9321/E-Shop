// tokenModel.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const tokenSchema = new Schema({
 token: {
    type: String,
    required: true,
    unique: true,
 },
 user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
 },
 type: {
    type: String,
    enum: ['access', 'refresh'],
    required: true,
 },
 expires: {
    type: Date,
    required: true,
 },
});

tokenSchema.methods.isExpired = function() {
 return Date.now() >= this.expires;
};

const Token = mongoose.model('Token', tokenSchema);

export default Token;
