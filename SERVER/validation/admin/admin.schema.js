const { Joi } = require('express-validation')

module.exports = {
    blankData: Joi.object({}),


    updateItdaDetailsParams: Joi.object({
        itdaCode: Joi.string().max(2).required()
    }),
    updateItdaDetailsBody: Joi.object({
        Name: Joi.string(),
        MobileNo: Joi.string().min(10).max(10)
    }),

    setItdaTargetParams: Joi.object({
        itdaCode: Joi.string().max(2).required()
    }),
    setItdaTargetBody: Joi.object({
        Target: Joi.number().required()
    }),
}