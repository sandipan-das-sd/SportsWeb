const UserModel = require('../ConnectDB/Model/Registration');

const getUserDetails = async (req, res) => {
  const userId = req.params.id;

  try {
    if (userId) {
      // Get a specific user by ID
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
          data: null,
          success: false
        });
      }
      return res.json({
        message: 'User Details',
        data: user,
        success: true
      });
    } else {
      // Get all users
      const allUsers = await UserModel.find();

      if (allUsers.length === 0) {
        return res.json({
          message: 'No users found in the database. Please add users.',
          data: [],
          success: false
        });
      }

      return res.json({
        message: 'All User Details',
        data: allUsers,
        success: true
      });
    }
  } catch (error) {
    console.error('Error fetching users', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = getUserDetails;
