const mongoose = require('mongoose');
const { Schema } = mongoose;

const MatchDetailsSchema = new Schema({
    player: String,
    name: String,
    baseValue: String,
    tCups: String,
    matches: String,
    innings: String,
    runs: String,
    avg: String,
    strikeRate: String,
    highestScore: String,
    wickets: String,
    economy: String,
    bestBowling: String,
    top5RunGetter: String,
    top5WicketTaker: String,
    top5Economical: String,
    no: String,
    ballsFaced: String,
    overs: String,
    runsConceded: String,
    catchStumpingRunout: String,
    foursSixes: String,
    thirtyFiftyHundred: String,
    bowlingSR: String,
    bowlingAvg: String,
    playerId: String,
    momAwards: String

}, { strict: false });

module.exports = mongoose.model('MatchDetails', MatchDetailsSchema);
