const RegistrationModel = require('../ConnectDB/Model/Registration');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password, photo } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({
        error: true,
        message: 'All fields are required',
      });
    }

    // Check if the user already exists
    const existingUser = await RegistrationModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: true,
        message: 'Email already in use',
      });
    }

    const existingMobile = await RegistrationModel.findOne({ mobile });
    if (existingMobile) {
      return res.status(400).json({
        error: true,
        message: 'Mobile number already in use',
      });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new RegistrationModel({
      name,
      email,
      mobile,
      password: hashedPassword,
      photo: photo || '',
    });

    // Save the user to the database
    await newUser.save();

    // Create a JWT token
    const tokenData = {
      id: newUser._id,
      email: newUser.email,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

    // Return the response
    return res.status(201).json({
      message: 'Registration successful',
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
        photo: newUser.photo
      },
      success: true,
    });

  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      error: true,
      message: 'An error occurred during registration',
    });
  }
};

module.exports = registerUser;
