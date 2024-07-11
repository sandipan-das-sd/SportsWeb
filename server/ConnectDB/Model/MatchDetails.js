const mongoose = require('mongoose');
const { Schema } = mongoose;

const MatchDetailsSchema = new Schema({}, { strict: false });

module.exports = mongoose.model('MatchDetails', MatchDetailsSchema);
