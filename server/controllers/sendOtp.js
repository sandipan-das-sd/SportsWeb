const nodemailer = require('nodemailer');
const UserModel = require('../ConnectDB/Model/Registration');

const sendOtp = async (req, res) => {
    try {
        console.log(req.body);
        const _otp = Math.floor(100000 + Math.random() * 900000);
        console.log(_otp);

        let user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ code: 404, message: 'User not found' });
        }

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "sd901656@gmail.com",
                pass: "hsig xbwz ackw dzxq"
            }
        });

        let info = await transporter.sendMail({
            from: '"Your App Name" <sd901656@gmail.com>',
            to: req.body.email,
            subject: "Password Reset OTP",
            text: `Your OTP for password reset is: ${_otp}`,
            html: `<html>
                    <body>
                        <h1>Hello,</h1>
                        <p>Your OTP for password reset is: <strong>${_otp}</strong></p>
                        <p>Please use this OTP to reset your password. This OTP is valid for the next 10 minutes.</p>
                        <p>Thank you,<br/>Your App Name Team</p>
                    </body>
                   </html>`
        });

        if (info.messageId) {
            await UserModel.updateOne({ email: req.body.email }, { otp: _otp });
            res.send({ code: 200, message: 'OTP sent successfully' });
        } else {
            res.status(500).send({ code: 500, message: 'Failed to send OTP' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ code: 500, message: 'Server error' });
    }
};

module.exports = sendOtp;
