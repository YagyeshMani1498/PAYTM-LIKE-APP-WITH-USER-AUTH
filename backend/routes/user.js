const express = require('express');
const z = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// getting the user model
const {User}  = require('../database/Schema');
console.log(User)

const router = express.Router();

router.post('/signup',function(req,res){

})



module.exports = router;