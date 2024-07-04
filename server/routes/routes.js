const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/RegistrationController')
const CheckLogin=require('../controllers/CheckUserLogin')
const getUserDetails=require('../controllers/userDetails')
//registration 
router.post('/register',UserRegistration)
//Check Login Routes
router.post('/login',CheckLogin);

//get User detais
router.get('/user-details',getUserDetails)

module.exports=router;
