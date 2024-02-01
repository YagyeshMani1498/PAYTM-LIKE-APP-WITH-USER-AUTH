const mongoose = require('mongoose');
require('dotenv').config()

const dbUrl = process.env.DB_URL+"Paytm"

const dbConnect = async function(){
    try {
        await mongoose.connect(dbUrl);
        console.log('connected to database successfully')
    }
    catch(err){
        console.log("unable to connect to database");
        console.log(err);
    }
}

module.exports = dbConnect;