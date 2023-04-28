const { validateUser } = require("../utils/validator");
const bcrypt = require('bcrypt');
const UserSchema = require('../models/User');
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET =  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const registerUser = async (req, res) => {
    const { error } = validateUser(req.body);
    const { firstName, lastName, email, password } = req.body
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let user = await UserSchema.findOne({email});
    if (user) {
        return res.status(400).json({message: 'User already exists!'});
    } else {
        bcrypt.hash(password, 10, async function(err, hash) {
            if(hash){
                const user = new UserSchema({ firstName, lastName, email, password: hash });
                await user.save();
                res.json(user);
            } else {
                res.status(400).json({success: false, message: "Something went wrong"})
            }
        });
    }
}

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        console.log(email)
        let user = await UserSchema.findOne({email});
            if(user){
                bcrypt.compare(password, user.password, function(err, result) {
                    if(result){
                        console.log(result)
                        return res.json({
                            token: jsonwebtoken.sign({ user }, JWT_SECRET),
                        });
                    } else {
                        console.log(err)
                        return res
                         .status(501)
                            .json({ message: "Something went wrong" });
                            }
            });
        }
        else{
          return res
            .status(401)
            .json({ message: "The username and password your provided are invalid" });
            }
    } catch(e){
        return res.status(500).json({msg: "something went wrong", success: false})
    }
}

module.exports = {
    registerUser,
    loginUser
};