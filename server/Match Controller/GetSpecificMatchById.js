// Get a specific match by ID
const Match=require('../ConnectDB/Model/Matches')
const getMatchById = async (req, res) => {
    try {
      const match = await Match.findById(req.params.id);
      if (!match) {
        return res.status(404).json({ message: 'Match not found' });
      }
      res.status(200).json(match);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports=getMatchById