// const express=require('express')
// const router=express.Router()
// const UserRegistration=require('../controllers/RegistrationController')
// const CheckLogin=require('../controllers/CheckUserLogin')
// const getUserDetails=require('../controllers/userDetails')

// const generateOtp = require('../controllers/sendOtp');
// const verifyOtp = require('../controllers/submitOtp');

// //registration 
// router.post('/register',UserRegistration)
// //Check Login Routes
// router.post('/login',CheckLogin);

// //get User detais FROM TOKEN
// router.get('/user-details',getUserDetails)
// //get user details by id
// router.post('/generate-otp', generateOtp);
// router.get('/verify-otp', verifyOtp);


// module.exports=router;
const express = require('express');
const router = express.Router();
const UserRegistration = require('../controllers/RegistrationController');
const CheckLogin = require('../controllers/CheckUserLogin');
const getUserDetails = require('../controllers/userDetails');
const sendOtp = require('../controllers/sendOtp');
const submitOtp = require('../controllers/submitOtp');

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




//resend otp



module.exports = router;
