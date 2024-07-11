const mongoose = require('mongoose');
const { Schema } = mongoose;

const MatchDetailsSchema = new Schema({
    player: Number,
    name: String,
    baseValue: Number,
    tCups: Number,
    matches: Number,
    innings: Number,
    runs: Number,
    avg: Number,
    strikeRate: Number,
    highestScore: String,
    wickets: Number,
    economy: Number,
    bestBowling: String,
    top5RunGetter: String,
    top5WicketTaker: String,
    top5Economical: String,
    no: Number,
    ballsFaced: Number,
    overs: Number,
    runsConceded: Number,
    catchStumpingRunout: String,
    foursSixes: String,
    thirtyFiftyHundred: String,
    bowlingSR: Number,
    bowlingAvg: Number,
    playerId: String,
    momAwards: String

}, { strict: false });

module.exports = mongoose.model('MatchDetails', MatchDetailsSchema);
