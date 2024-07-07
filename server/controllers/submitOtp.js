

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const UserModel = require('../ConnectDB/Model/Registration');

const submitOtp = async (req, res) => {
    try {
        console.log(req.body);
        const { email, token } = req.params;
        const { otp, password } = req.body;

        if (!otp || !password) {
            return res.status(400).send({ code: 400, message: 'OTP and password are required' });
        }
        

        let user = await UserModel.findOne({ otp });

        if (!user) {
            return res.status(400).send({ code: 400, message: 'Invalid OTP' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.updateOne({ email: user.email }, { password: hashedPassword,passwordUpdatedAt: Date.now(), otp: null });
        const dateOptions = {
            timeZone: 'Asia/Kolkata',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };

        const formattedDate = new Date().toLocaleString('en-IN', dateOptions);


        // Send confirmation email
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "sd901656@gmail.com",
                pass: "hsig xbwz ackw dzxq"
            }
        });

        let info = await transporter.sendMail({
            from: '"Terrace Cup Team" <sd901656@gmail.com>',
            to: user.email,
            subject: "Password Updated Successfully Terrace Cup Team Account",
            text: `Your password has been updated successfully.`,
            html: `<html>
                    <head>
                        <style>
                            body {
                                font-family: 'Arial', sans-serif;
                                background-color: #f4f4f4;
                                margin: 0;
                                padding: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                                color: #333;
                            }
                            .container {
                                background-color: #fff;
                                padding: 20px;
                                border-radius: 10px;
                                box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                                text-align: center;
                                border: 2px solid #28a745;
                            }
                            h1 {
                                color: #28a745;
                            }
                            p {
                                font-size: 16px;
                                line-height: 1.5;
                                margin: 10px 0;
                            }
                            .success-message {
                                font-size: 24px;
                                font-weight: bold;
                                color: #155724;
                                margin: 20px 0;
                                padding: 10px;
                                border: 1px dashed #28a745;
                                background-color: #d4edda;
                            }
                            .password-info {
                                font-size: 18px;
                                color: #155724;
                                margin: 10px 0;
                                padding: 10px;
                                background-color: #d4edda;
                                border: 1px dashed #28a745;
                            }
                            .company {
                                margin-top: 20px;
                                font-size: 14px;
                                color: #007bff;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Password Updated Successfully</h1>
                            <p>Hello ${user.name},</p>
                            <p class="success-message">Your password has been updated successfully.</p>
                            <p class="password-info">Your new password is: <strong>${password}</strong></p>
                            <p>Password updated at: <strong>${formattedDate}</strong> (Kolkata Time)</p>
                            <p>If you did not request this change, please contact our support team immediately.</p>
                            <p>Thank you,<br/>Terrace Cup Team</p>
                            <p class="company">Terrace Cup - Your Trusted Tournament Partner</p>
                        </div>
                    </body>
                   </html>`
        });

        res.send({ code: 200, message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ code: 500, message: 'Server error' });
    }
};

module.exports = submitOtp;


