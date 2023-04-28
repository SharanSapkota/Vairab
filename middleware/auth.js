const jwt = require('jsonwebtoken') 
 
 const auth = ({ headers }, res, next) => {
    try{
        const userData = jwt.verify(headers.authorization, process.env.JWT_SECRET)
        if(!userData) {
            res.status(501).json({message: "Unauthorised"})
        }
        next();
    } catch(e) {
        res.status(404).json({message: "Something went wrong!"})
    }
}

module.exports = {auth}