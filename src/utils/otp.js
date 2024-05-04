const crypto = require('crypto');
const emailService = require('./emailService');

const generateOTP = () => {
 return crypto.randomBytes(3).toString('hex');
};

const sendOTP = async (email, otp) => {
 const subject = 'Your OTP for E-Shop-1';
 const text = `Your OTP is: ${otp}`;
 await emailService.sendEmail(email, subject, text);
};

const verifyOTP = (userInput, otp) => {
 return userInput === otp;
};

module.exports = { generateOTP, sendOTP, verifyOTP };
