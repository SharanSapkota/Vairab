const Joi = require('joi')

const validateUser = (user) => {
    const schema = Joi.object({
        firstName:Joi.string().min(6).required(),
        lastName:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    });
    return schema.validate(user)
}

module.exports = {validateUser}