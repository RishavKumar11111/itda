const { Joi } = require('express-validation')

module.exports = {
    blankData: Joi.object({}),



    signInBody: Joi.object({
        userId: Joi.string().required(),
        password: Joi.string().required()
    })
}