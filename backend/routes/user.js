const express = require('express');

const z = require('zod');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

// getting the user model
const {User,Account}  = require('../database/Schema');
const {JWT_SECRET} = require("../config")

const router = express.Router();

// SIGNUP ROUTE

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

    try {
        const hashPassword = await bcrypt.hash(req.body.password,10);

        try{
            const user = await User.create({
                username:req.body.username,
                password:hashPassword,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
            });


            const account =  await Account.create({
                userId:user._id,
                balance:parseFloat((Math.random()*10000 +1).toFixed(2))
            })

            
            const token = jwt.sign({
                userId:user._id,
                username:user.username
            },JWT_SECRET)

            res.status(200).json({
                msg:"user created successfully",
                token,
                userId:user._id,
                account
            })
        }
        catch(err){
            console.log(err)
            res.status(500).json({
                msg: "Intrenal server error",
                err
            })
        }

    }
    catch(err){
        return res.status(201).json({
            msg:"password could not be encrypted!"
        })
    }

})

// SIGNIN ROUTE

const signinValidationSchema = z.object({
    username:z.string().email(),
    password:z.string().min(8)
})

router.post('/signin', async function(req,res){
    const {success} = signinValidationSchema.safeParse(req.body);

    if(!success){
        return res.status(201).json({
            msg:"Invalid Input"
        })
    };

    try {
        const findUser = await User.findOne({username:req.body.username});

        if(!findUser) return res.status(201).json({
            msg:"Username not found"
        })
            
        let passwordMatch = await bcrypt.compare(req.body.password,findUser.password);
        if(!passwordMatch){
            return res.status(400).json({
                msg:"Password does not match"
            })
        }

        // CREAte jwt token,

        const token = jwt.sign({
            userId:findUser._id,
            username:findUser.username
        },JWT_SECRET);

        res.status(200).json({
            msg: "Login Successfull",
            username:findUser.username,
            token:token
        })
    }
    catch(err){
        res.status(500).json({
            err,
        })
    }
    


})

module.exports = router;