// Delete a match by ID
const Match=require('../ConnectDB/Model/Matches')
const deleteMatchById = async (req, res) => {
    try {
      const match = await Match.findByIdAndDelete(req.params.id);
      if (!match) {
        return res.status(404).json({ message: 'Match not found' });
      }
      res.status(200).json({ message: 'Match deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports=deleteMatchById