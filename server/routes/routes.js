const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/RegistrationController')
const CheckLogin=require('../controllers/CheckUserLogin')
const getUserDetails=require('../controllers/userDetails')
const localVariables = require('../controllers/LocalvariableforOtp');
const generateOtp = require('../controllers/generateOtp');
const verifyOtp = require('../controllers/VerifyOtp');
router.use(localVariables)
//registration 
router.post('/register',UserRegistration)
//Check Login Routes
router.post('/login',CheckLogin);

//get User detais FROM TOKEN
router.get('/user-details',getUserDetails)
//get user details by id
router.post('/generate-otp', generateOtp);
router.get('/verify-otp', verifyOtp);


module.exports=router;
