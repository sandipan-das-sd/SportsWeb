// Get all matches
const Match=require('../ConnectDB/Model/Matches')
const getAllMatches = async (req, res) => {
    try {
      const matches = await Match.find();
      res.status(200).json(matches);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports=getAllMatches;