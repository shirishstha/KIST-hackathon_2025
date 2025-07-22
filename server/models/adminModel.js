//external modules
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminModel;