const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Ensure the name is required
    },
    email: {
        type: String,
        required: true, // Ensure the email is required
        unique: true,    // Ensure the email is unique
        lowercase: true, // Normalize email to lowercase
        trim: true,      // Remove whitespace
    },
    password: {
        type: String,
        required: true, // Ensure the password is required
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);
module.exports = EmployeeModel;
