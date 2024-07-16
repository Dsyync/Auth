const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
        unique: true,    
        lowercase: true, 
        trim: true,      
    },
    password: {
        type: String,
        required: true, 
    },
}, {
    timestamps: true, 

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
module.exports = EmployeeModel;
