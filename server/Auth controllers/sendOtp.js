const jwt=require('jsonwebtoken')
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

        const userName = user.name; 
         // Generate JWT token
         const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET_KEY, { expiresIn: '10m' });
         console.log("Generated Token:", token);
         // Update user with OTP and token
         await UserModel.updateOne({ email: req.body.email }, { otp: _otp, token: token });
 

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "sd901656@gmail.com",
                pass: "hsig xbwz ackw dzxq"
            }
        });

        let info = await transporter.sendMail({
            from: '"Terrace Cup Team" <sd901656@gmail.com>',
            to: req.body.email,
            subject: "Password Reset OTP from Terrace Cup Team ",
            text: `Your OTP for password reset is: ${_otp}`,
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
                                border: 2px solid #007bff;
                            }
                            h1 {
                                color: #007bff;
                            }
                            p {
                                font-size: 16px;
                                line-height: 1.5;
                                margin: 10px 0;
                            }
                            .otp {
                                font-size: 24px;
                                font-weight: bold;
                                color: #dc3545;
                                margin: 20px 0;
                                padding: 10px;
                                border: 1px dashed #dc3545;
                                background-color: #ffebee;
                            }
                            .timer {
                                font-size: 18px;
                                color: #888;
                                margin-top: 10px;
                            }
                            .expired {
                                font-size: 18px;
                                color: #dc3545;
                                margin-top: 10px;
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
                            <h1>Hello, ${userName}</h1>
                            <p>Your OTP for password reset is:</p>
                            <div class="otp">${_otp}</div>
                            <p class="timer">This OTP is valid for <span id="timer">10:00</span> minutes.</p>
                            <p>Thank you,<br/>Terrace Cup Team</p>
                            <p class="company">Terrace Cup - Your Trusted Tournament Partner</p>
                        </div>
                        <script>
                            (function() {
                                var timerElement = document.getElementById('timer');
                                var minutes = 10;
                                var seconds = 0;
                                function updateTimer() {
                                    if (seconds === 0) {
                                        if (minutes === 0) {
                                            timerElement.innerHTML = "OTP expired";
                                            timerElement.className = 'expired';
                                            clearInterval(countdown);
                                            return;
                                        }
                                        minutes--;
                                        seconds = 59;
                                    } else {
                                        seconds--;
                                    }
                                    var minuteStr = minutes < 10 ? '0' + minutes : minutes;
                                    var secondStr = seconds < 10 ? '0' + seconds : seconds;
                                    timerElement.innerHTML = minuteStr + ':' + secondStr;
                                }
                                var countdown = setInterval(updateTimer, 1000);
                            })();
                        </script>
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
