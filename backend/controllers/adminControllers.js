const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminSchema')
const Form=require('../models/applicationForm')
const Slot=require('../models/slot')

const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    
    const admin = await Admin.findOne({ email })
    
     
        if (admin &&(await password == admin.password)) {
            res.json({
                _id: admin._id,
                email: admin.email,
            })
        }
        else {
            res.status(400)
            throw new Error("Invalid username or password")
        }
      
})

const getCompanyInfo = asyncHandler(async (req, res) => {
    const getcompanydata = await Form.find({})
    res.json(getcompanydata)
})

const editCompanyInfo=asyncHandler(async(req,res)=>{
    const id=req.params.id
    const editcompany=await Form.findById({_id:id})
    res.json(editcompany)
})

const processingCompanyStatus = asyncHandler(async (req, res) => {
    const id = req.params.id
    const updatestatus = await Form.updateOne({ _id: id }, {
        $set: {

            companystatus: 'processing'
        }
    })
    res.json(updatestatus)
})

const updateCompanyStatus=asyncHandler(async(req,res)=>{
    const id=req.params.id
    const updatestatus=await Form.updateOne({_id:id},{
        $set:{
           
            companystatus:'approved'
           }
    })
    res.json(updatestatus)
})

const rejectCompanysts = asyncHandler(async (req, res) => {
    const id = req.params.id
    const rejectstatus = await Form.updateOne({ _id: id }, {
        $set: {
            
            companystatus: 'rejected'
        }
    })
    res.json(rejectstatus)
})

const pendinginfo = asyncHandler(async (req, res) => {
    
    const pendingstatus = await Form.find({companystatus:'pending'})
    res.json(pendingstatus)
})
const approvedinfo = asyncHandler(async (req, res) => {

    const approvedstatus = await Form.find({ companystatus: 'approved' })
    res.json(approvedstatus)
})

const processinginfo = asyncHandler(async (req, res) => {

    const processstatus = await Form.find({ companystatus: 'processing' })
    res.json(processstatus)
})
//slot get

const slotsInfo=asyncHandler(async(req,res)=>{
    const slotinfo=await Slot.find({})
    
    res.json(slotinfo) 
})

const updateSlot=asyncHandler(async(req,res)=>{
    const { appid, slotId, slotSection }=req.body
    console.log(appid);
    const getApp = await Form.findById({ _id:appid})
    console.log(getApp);
    const updateslot = await Slot.updateMany({ _id: slotId },{
        $set:{
            selected:true,
            companyname:getApp.companyname,
            useremail:getApp.email
        }
    })
    console.log(updateslot);
    res.json(updateslot)
})

const getApplications=asyncHandler(async(req,res)=>{
    const getapplication=await Form.find({bookingstatus:false,companystatus:'approved'})
    res.json(getapplication)
    console.log(getapplication);
})

const removeslotDuplicate=asyncHandler(async(req,res)=>{
    const { appId }=req.body
    console.log('###');
    console.log(appId);
    const duplicate = await Form.findById({ _id:appId})
    console.log(duplicate);
    if(!duplicate.bookingstatus){
        await Form.updateOne({ _id: appId },{
            $set:{
                bookingstatus:true
            }
        })
        res.status(200).json({ duplicateRemoved: true });
    }
})



module.exports = { authAdmin, getCompanyInfo, editCompanyInfo, updateCompanyStatus, rejectCompanysts, processingCompanyStatus, pendinginfo,
    approvedinfo, processinginfo, slotsInfo, getApplications, updateSlot, removeslotDuplicate
}