const bcrypt = require('bcryptjs');
const UserModel = require('../ConnectDB/Model/Registration');

const submitOtp = async (req, res) => {
    try {
        console.log(req.body);

        const { otp, password } = req.body;

        if (!otp || !password) {
            return res.status(400).send({ code: 400, message: 'OTP and password are required' });
        }

        let user = await UserModel.findOne({ otp });

        if (!user) {
            return res.status(400).send({ code: 400, message: 'Invalid OTP' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.updateOne({ email: user.email }, { password: hashedPassword, otp: null });

        res.send({ code: 200, message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ code: 500, message: 'Server error' });
    }
};

module.exports = submitOtp;
