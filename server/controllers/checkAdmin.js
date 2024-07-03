const bcrypt = require('bcrypt');
const UserModel = require('../ConnectDB/models/RegistrationSchema');
const jwt = require('jsonwebtoken');

const checkAdmin = async (req, res) => {
    const { email, password } = req.body;

    if (email === 'admin@gmail.com' && password === 'admin123') {
        try {
            // Fetch the admin user details from the database
            let admin = await UserModel.findOne({ email });
            if (!admin) {
                // Create a new admin user if not found
                const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
                admin = new UserModel({
                    email: email,
                    password: hashedPassword,
                    role: 'admin'
                });
                await admin.save();
            }
            
            // Prepare token data
            const adminTokenData = {
                id: admin._id,
                email: admin.email,
                role: 'admin'
            };
            const generateAdminToken = jwt.sign(adminTokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
            const cookieOption = {
                httpOnly: true,
                secure: true,
            };
            
            // Send the token as a cookie
            return res.cookie('token', generateAdminToken, cookieOption).json({
                message: "Admin Login Successfully",
                data: adminTokenData,
                success: true
            });
        } catch (error) {
            console.log("Error in Admin Login Controller");
            return res.status(500).json({
                message: error.message || error,
                error: true
            });
        }
    } else {
        return res.status(401).json({
            message: "Invalid admin credentials",
            error: true,
        });
    }
};

module.exports = checkAdmin;
