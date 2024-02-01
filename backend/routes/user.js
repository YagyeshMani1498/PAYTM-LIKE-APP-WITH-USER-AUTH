const express = require('express');
const z = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// getting the user model
const {User}  = require('../database/Schema');


const router = express.Router();

const signupValidationSchema = z.object({
    username:z.string().email(),
    password:z.string().min(8),
    firstName:z.string(),
    lastName:z.string()
})

router.post('/signup',async function(req,res){

    const {success} = signupValidationSchema.safeParse(req.body);

    if(!success){
        return res.status(201).json({
            msg:"Invalid Input"
        })
    }

    const existingUser = await User.findOne({username:req.body.username});

    if(existingUser){
        return res.status(201).json({
            msg:"username already taken!"
        })
    }

    

})



module.exports = router;