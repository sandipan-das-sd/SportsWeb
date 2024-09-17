const jwt = require('jsonwebtoken');
const Match = require('../ConnectDB/Model/Matches');

const deleteMatchById = async (req, res) => {
  try {
    const { token } = req.body;

    // Check if a token is provided in the request body
    if (!token) {
      return res.status(401).json({ error: "No token provided. Please include a token in the request body." });
    }

    // Verify the token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // Check if the user is an admin
    if (decoded.email !== 'debadmin@gmail.com') {
      return res.status(403).json({ error: "Access denied. Admin only." });
    }

    // If we've reached this point, the user is authenticated as an admin
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) {
      return res.status(404).json({ message: 'Match not found' });
    }
    res.status(200).json({ message: 'Match deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteMatchById;