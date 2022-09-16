const mongoose = require('mongoose');

const applicationschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },

    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    proposition: {
        type: String,
        required: true
    },
    competators: {
        type: String,
        required: true
    },
    revenue: {
        type: String,
        required: true
    },
    potential: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    proposel: {
        type: String,
        required: true
    },
    userid:{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
    companystatus:{
        type:String
    },
    bookingstatus:{
        type:Boolean 
    }

})
const Form = mongoose.model('Form2', applicationschema)
module.exports = Form;