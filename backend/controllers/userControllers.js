


const asyncHandler = require('express-async-handler')
const User = require('../models/UserSchema')
const Form=require('../models/applicationForm')
const generateToken = require('../utils/generateToken')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email })
    
    if (userExists) {
        res.status(400)
        throw new Error('user already exists')
    }
    const user = await User.create({
        name,
        email,
        password,
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.send(400)
        throw new Error('error occured')
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400)
        throw new Error("Invalid username or password")
    }
})

const userData=asyncHandler(async(req,res)=>{
    const userInfo=await User.find({})
   
        res.json(userInfo)
    
})

const companyInfo = asyncHandler(async (req, res) => {
    const { 
        name,
        email,
        address, city, state, number,
        company, team, product,
        problem, solution, proposition, competators,
        revenue, potential, plan, type, proposel,userid  
    } = req.body
     const userExists = await Form.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('user already exists')
    }
    const companydata = await Form.create({
        name,
        email,
        address, city, state, number,
        company, team, product,
        problem, solution, proposition, competators,
        revenue, potential, plan, type, proposel,userid,
        companystatus:'pending' ,bookingstatus:false 
    })
    if (companydata) {
        res.status(201).json({
            _id: companydata._id,
            name: companydata.name,
            email: companydata.email,
           
        })
    } else {
        res.send(400)
        throw new Error('error occured')
    }
})

const getcombyuser=asyncHandler(async(req,res)=>{
    let id=req.params.id
    const getuserscompany=await Form.find({userid:id})
    console.log(getuserscompany);
    res.json(getuserscompany)
})





module.exports = { registerUser, authUser, userData, companyInfo, getcombyuser }