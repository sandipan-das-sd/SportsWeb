
const express = require('express');
const router = express.Router();
const UserRegistration = require('../Auth controllers/RegistrationController');
const CheckLogin = require('../Auth controllers/CheckUserLogin');
const getUserDetails = require('../Auth controllers/userDetails');
const sendOtp = require('../Auth controllers/sendOtp');
const submitOtp = require('../Auth controllers/submitOtp');
const getUserDetailsFromId=require('../Auth controllers/GetUserDetails')
const NewmatchCreate = require('../Match Controller/NewMatch');




// Registration
router.post('/register', UserRegistration);

// Check Login Routes
router.post('/login', CheckLogin);

// Get User details FROM TOKEN
router.get('/user-details', getUserDetails);

// Generate OTP
router.post('/generate-otp', sendOtp);

// Verify OTP and reset password
router.post('/verify-otp', submitOtp);


// Route to get user details by ID
router.get('/user-detailsid/:id', getUserDetailsFromId);

// Route to get all user details
router.get('/user-detailsid', getUserDetailsFromId);

// Route to create a new match
router.post('/create-matches', NewmatchCreate);



module.exports = router;
