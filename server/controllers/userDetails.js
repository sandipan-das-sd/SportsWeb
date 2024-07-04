const getUserDetailsfromToken = require("../helpers/getUserDetailsFromToken");

async function userDetails(req, res) {
  try {
    const token = req.cookies.token || "";

    // Call helper function to decode token and get user details
    const user = await getUserDetailsfromToken(token);

    // If user details retrieved successfully, send response
    return res.status(200).json({
      message: "User details retrieved successfully",
      data: user
    });
  } catch (error) {
    // Handle errors
    if (error.message === 'Session expired') {
      // Clear expired token from cookies or localStorage if needed
      // Redirect user to login page or return 401 Unauthorized
      return res.status(401).json({
        message: "Session expired. Please login again.",
        error: true
      });
    } else {
      // Handle other errors
      console.error("Error fetching user details:", error);
      return res.status(500).json({
        message: "Internal server error",
        error: true
      });
    }
  }
}

module.exports = userDetails;
