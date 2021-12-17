const { Joi } = require('express-validation')

module.exports = {
    blankData: Joi.object({}),


    // updateItdaDetailsParams: Joi.object({
    //     itdaCode: Joi.string().max(2).required()
    // })
}