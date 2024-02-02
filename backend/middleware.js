const JWT_SECRET = require("./config");
const jwt = require('jsonwebtoken');

const authorize =  function (req,res,next){
    
        const auth = req.headers.authorization;

        if(!auth || !auth.startsWith("Bearer ")){
            return res.status(401).json({
            msg:"Invalid token!"
        })
        }

        const token = auth.split(' ')[1];
        
        try{
            const decode =  jwt.verify(token,JWT_SECRET);

            if(decode.userId && decode.username){
                req.user = decode;
                next();
            }else {
                return res.status(403).json({
                    msg:"Invalid request"
                })
            }
        }
        catch(err){
            return res.status(401).json({
                msg:"Invalid request"
            })
        }

}
   

module.exports = authorize;