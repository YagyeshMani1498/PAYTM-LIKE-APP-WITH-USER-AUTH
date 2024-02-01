const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        minLength:8,
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
        unique:false,
    },
    lastName:{
        type:String,
        required:true,
        unique:false,
        trim:true,
        maxLength:50
    }
});

// create a user model;
const User = mongoose.model("User",userSchema);

module.exports = {
    User,
}