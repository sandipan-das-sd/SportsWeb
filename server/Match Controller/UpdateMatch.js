
// Update a match by ID
const Match=require('../ConnectDB/Model/Matches')
const updateMatchById = async (req, res) => {
    try {
      const match = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!match) {
        return res.status(404).json({ message: 'Match not found' });
      }
      res.status(200).json(match);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports=updateMatchById