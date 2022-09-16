const express=require('express')
const { registerUser, authUser, companyInfo, getcombyuser }=require('../controllers/userControllers')

const router=express.Router()


router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/company').post(companyInfo)
router.route('/usercompany/:id').get(getcombyuser)

module.exports=router; 

