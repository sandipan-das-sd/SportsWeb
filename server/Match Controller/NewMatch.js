// Create a new match
const Match=require('../ConnectDB/Model/Matches')
const NewMatch = async (req, res) => {
    try {
      const match = new Match(req.body);
      await match.save();
      res.status(201).json(match);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports=NewMatch