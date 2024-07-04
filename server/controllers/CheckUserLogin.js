// const jwt = require('jsonwebtoken');
// const bcryptjs = require('bcryptjs');
// const RegistrationModel = require('../ConnectDB/Model/Registration');

// const userLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         error: true,
//         message: "Email and password are required",
//       });
//     }

//     const user = await RegistrationModel.findOne({ email });

//     if (!user) {
//       return res.status(404).json({
//         error: true,
//         message: "User not found",
//       });
//     }

//     // Compare passwords using synchronous method for debugging
//     const isPasswordValid = bcryptjs.compare(password, user.password);

//     console.log('Password:', password); // Debug log
//     console.log('Hashed Password:', user.password); // Debug log
//     console.log('Password valid:', isPasswordValid); // Debug log

//     if (!isPasswordValid) {
//       return res.status(400).json({
//         error: true,
//         message: "Incorrect password",
//       });
//     }

//     const tokenData = {
//       id: user._id,
//       email: user.email,
//     };

//     const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

//     const cookieOptions = {
//       httpOnly: true,
//       secure: true,
//     };

//     return res.cookie('token', token, cookieOptions).status(200).json({
//       message: "Login successful",
//       token: token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         mobile: user.mobile,
//         photo: user.photo
//       },
//       success: true,
//     });

//   } catch (error) {
//     console.error("Error during login:", error);
//     return res.status(500).json({
//       error: true,
//       message: "An error occurred during login",
//     });
//   }
// };

// module.exports = userLogin;
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const RegistrationModel = require('../ConnectDB/Model/Registration');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: true,
        message: "Email and password are required",
      });
    }

    let user = await RegistrationModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        error: true,
        message: "Incorrect password",
      });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

    const cookieOptions = {
      httpOnly: true,
      secure: true,
    };

    // Check if the user is an admin
    if (email === 'debadmin@gmail.com' && password === 'debadmin$2024') {
      // Hardcoded admin credentials - replace with secure management if used in production
      user = {
        _id: 'admin_id_here', // Replace with actual admin ID if available
        name: 'Deb Admin',    // Replace with actual admin name
        email: 'debadmin@gmail.com',
        // Add other admin details as needed
      };

      return res.cookie('token', token, cookieOptions).status(200).json({
        message: "Admin login successful",
        token: token,
        admin: {
          _id: user._id,
          name: user.name,
          email: user.email,
          // Add other admin details as needed
        },
        success: true,
      });
    }

    // Regular user login
    return res.cookie('token', token, cookieOptions).status(200).json({
      message: "Login successful",
      token: token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        photo: user.photo
      },
      success: true,
    });

  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      error: true,
      message: "An error occurred during login",
    });
  }
};

module.exports = userLogin;
