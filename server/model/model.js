
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },

    gender : String,
    
    address : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }
})

const Contactdb = mongoose.model('contactdb', schema);

module.exports = Contactdb;