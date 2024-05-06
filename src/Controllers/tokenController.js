// tokenController.js
import Token from '../models/tokenModel.js';

export const createToken = async (userId, type, expiresIn) => {
 const token = new Token({
    token: 'yourGeneratedTokenHere', // You should generate this securely
    user: userId,
    type: type,
    expires: new Date(Date.now() + expiresIn), // expiresIn is in milliseconds
 });

 await token.save();
 return token;
};

export const isTokenValid = async (tokenString) => {
 const token = await Token.findOne({ token: tokenString });
 if (!token) {
    return false;
 }
 return !token.isExpired();
};
