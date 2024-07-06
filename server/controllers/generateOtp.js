// generateOtp.js

const UserModel = require('../ConnectDB/Model/Registration');
const otpGenerator = require('otp-generator');

const generateOtp = async (req, res) => {
    try {
        const { email } = req.body; // Assuming email is passed in the request body
        const user = await UserModel.findOne({ email });
        
        if (user) {
            const otp = otpGenerator.generate(6, { 
                lowerCaseAlphabets: false, 
                upperCaseAlphabets: false, 
                specialChars: false 
            });

            const otpValidityMinutes = 10; // OTP validity time in minutes
            const expiresAt = new Date(Date.now() + otpValidityMinutes * 60000); // Expiry time in milliseconds

            // Store OTP and its expiration time in req.app.locals
            req.app.locals.otp = {
                code: otp,
                email: email,
                expiresAt: expiresAt
            };

            console.log(`Generated OTP for ${email}: ${otp}`);
            
            res.status(200).json({
                code: otp
            });
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
}

module.exports = generateOtp;
