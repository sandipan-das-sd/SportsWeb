const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
//login and registration user and admin
const UserRegistration=require('../controllers/UserRegistration')
const checkEmail=require('.././controllers/checkEmail')
const checkPassword=require('.././controllers/checkPassword')
const checkAdmin=require("../controllers/checkAdmin");









//staff related end points
const addStaff=require('../controllers/Staffs/AddStaff');
const getStaffs=require('../controllers/Staffs/GetStaff');
const editStaffs=require('../controllers/Staffs/EditStaff');
const deleteStaffs=require('../controllers/Staffs/DeleteStaff')
















//controllers


// Registration Controller
router.post('/register',UserRegistration)
//Email
router.post('/email',checkEmail)
//Check Password
router.post('/password',checkPassword)
//check admin
router.post('/admin',checkAdmin)



// Staff Endpoints Starts


//add staff
router.post('/add-staff',addStaff);
//get all staffs
router.get('/get-staffs',getStaffs)
//get particular staffs
router.get('/get-staffs/:id',getStaffs);
//edit staff
router.patch('/edit-staffs/:id',editStaffs);
//delete staffs
router.delete('/delete-staffs/:id',deleteStaffs)






module.exports=router;
