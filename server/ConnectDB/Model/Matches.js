const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  matchType: {
    type: String,
    enum: ['upcoming', 'live', 'recent'],
    required: true,
  },
  score: {
    type: String,
    required: function() { return this.matchType === 'recent'; }, // Score is required if the match is recent
  },
  payment: {
    rs: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  statsAvailable: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
