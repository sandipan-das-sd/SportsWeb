const mongoose = require('mongoose');
const validator = require('validator'); // For email validation

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Remove leading/trailing whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique email addresses
    lowercase: true, // Convert to lowercase for consistency
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email format');
      }
    }
  },
  password:{
    type:String,
    required:true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true // For uniqueness, consider validation against a phone number format
  },
  photo: {
    type: String, // Store the path or URL to the photo
    default: '' // Optional default value if no photo provided
  },
otp: {
    type: Number, // Store the path or URL to the photo
    default: '' // Optional default value if no photo provided
  }
});

module.exports = mongoose.model('User', userSchema);
