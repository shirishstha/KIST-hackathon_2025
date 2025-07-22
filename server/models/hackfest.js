//external modules
const { timeStamp } = require('console');
const mongoose = require('mongoose');

const registeredMembersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    faculty: String,
    semester: String,
    id: Number,
    contact: Number
},{timestamps:true})

const hackathonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    members: [{
        name: String,
        email: String,
        faculty: String,
        semester: String,
        id: Number,
    }]

},{timestamps:true})

exports.codewarModel = new mongoose.model('codewar', registeredMembersSchema);
exports.graphicdesigningModel = new mongoose.model('graphic_designing', registeredMembersSchema);
exports.hackathonModel = new mongoose.model("hackathon", hackathonSchema);
