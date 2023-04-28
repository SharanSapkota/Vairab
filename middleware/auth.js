const jwt = require('jsonwebtoken') 
 
 const auth = ({ headers }, res, next) => {
    const userData = jwt.verify(headers.authorization, process.env.JWT_SECRET)
    if(!userData) {
        res.status(501).json({message: "Unauthorised"})
    }
    next();
}

module.exports = {auth}