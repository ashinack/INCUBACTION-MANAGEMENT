const mongoose = require('mongoose');

const slotschema = new mongoose.Schema({
    section: {
        type: String,
        
    },
    selected: {
        type: Boolean,
        default:false
    },
    slot_no: { type: Number },
    companyname:{
        type:String
    },
    useremail:{
        type:String
    }


})
const Slot = mongoose.model('Slot', slotschema)
module.exports = Slot;