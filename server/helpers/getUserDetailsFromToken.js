// const jwt = require('jsonwebtoken');

// async function getUserDetailsFromToken(token) {
//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     // Extract user details from decoded token
//     const user = {
//       id: decoded.id,
//       email: decoded.email,
     
//     };

//     return user;
//   } catch (error) {
//     // If token is invalid or expired, handle error
//     throw new Error('Session expired'); // Example error message
//   }
// }

// module.exports = getUserDetailsFromToken;

const jwt = require('jsonwebtoken');

async function getUserDetailsFromToken(token) {
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Extract user details from decoded token
    const user = {
      id: decoded.id,
      email: decoded.email,
      token: token, 
      name: decoded.name,
      role: decoded.role,
      photo:decoded.photo,
      mobile:decoded.mobile
    };
    console.log(user)

    return user;
  } catch (error) {
    // If token is invalid or expired, handle error
    throw new Error('Session expired'); // Example error message
  }
}

module.exports = getUserDetailsFromToken;

