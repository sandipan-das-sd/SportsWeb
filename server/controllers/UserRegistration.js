const UserModel = require('../ConnectDB/models/RegistrationSchema');
const bcrypt = require('bcrypt');

const UserRegistration = async (req, res) => {
  try {
    const { email, password, role, confirmpassword } = req.body;

    // Check if the email already exists
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return res.json({
        message: "Email already exists. Please use a different email.",
        error: true,
      });
    }

    // Check if password and confirm password match
    if (password !== confirmpassword) {
      return res.json({
        message: "Passwords do not match.",
        error: true,
      });
    }

    // Check if the role is admin
    if (role === 'admin') {
      return res.json({
        message: "Admin can't register. Only users can register.",
        error: true,
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create payload without confirmpassword
    const payload = {
      email,
      role,
      password: hashPassword,
    };

    // Save new user
    const newUser = new UserModel(payload);
    const newUserSave = await newUser.save();

    return res.json({
      message: "User registered successfully.",
      success: true,
      data: newUserSave,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};

module.exports = UserRegistration;
