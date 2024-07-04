const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/RegistrationController')
const CheckLogin=require('../controllers/CheckUserLogin')

//registration 
router.post('/register',UserRegistration)
//Check Login Routes
router.post('/login',CheckLogin);


module.exports=router;
