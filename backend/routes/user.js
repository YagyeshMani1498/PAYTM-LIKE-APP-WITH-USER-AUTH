const express = require('express');
const z = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// getting the user model
const {User}  = require('../database/Schema');


const router = express.Router();

router.post('/signup',function(req,res){

})



module.exports = router;