// verifyOtp.js

const verifyOtp = async (req, res) => {
    try {
        const { email, code } = req.query; // Assuming email and code (OTP) are passed in the query params
        
        // Check if req.app.locals.otp exists and matches the OTP (code) provided
        if (!req.app.locals.otp || req.app.locals.otp.code !== code) {
            console.log(`Invalid OTP for ${email}: ${code}`);
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // Check if OTP is associated with the correct email
        if (req.app.locals.otp.email !== email) {
            console.log(`OTP does not match the provided email for ${email}`);
            return res.status(400).json({ message: "OTP does not match the provided email" });
        }

        // Check if OTP has expired
        if (new Date() > req.app.locals.otp.expiresAt) {
            console.log(`OTP has expired for ${email}: ${code}`);
            return res.status(400).json({ message: "OTP has expired" });
        }

        // Invalidate OTP after successful verification
        req.app.locals.otp = null;
        req.app.locals.resetSession = true;

        console.log(`Valid OTP verified for ${email}: ${code}`);
        res.status(200).json({ message: "Valid OTP" });
    } catch (error) {
        console.error("Error in verifyOtp:", error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = verifyOtp;
