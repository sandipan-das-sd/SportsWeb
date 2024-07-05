const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/RegistrationController')
const CheckLogin=require('../controllers/CheckUserLogin')
const getUserDetails=require('../controllers/userDetails')
//registration 
router.post('/register',UserRegistration)
//Check Login Routes
router.post('/login',CheckLogin);

//get User detais FROM TOKEN
router.get('/user-details',getUserDetails)
//get user details by id


module.exports=router;
