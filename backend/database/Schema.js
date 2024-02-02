const mongoose = require("mongoose");


// user schema
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

// user account schema

const accountSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    balance:{
        type:Number,
        required:true
    }
})

// create a user model;
const User = mongoose.model("User",userSchema);
// create a account model;
const Account = mongoose.model('Account',accountSchema);

module.exports = {
    User,
    Account,
}