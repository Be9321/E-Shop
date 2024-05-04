import nodemailer from 'nodemailer';

export const sendEmail = (reciepent, subject,body) => {
const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
 }
});

const mailOptions = {
   from: '"E-SHOP-1" <belyseurwidukunda@getmail.com>',
   to: reciepent,
   subject: subject,
   text: body
};
 transporter.sendEmail(mailOptions, (error,info) => {
   if (error) {
      console.log('Error sending Email:', error);
   } else {
      console.log('Email sent:', info.response);
   }});
}
