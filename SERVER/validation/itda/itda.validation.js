const schema = require('./itda.schema');


module.exports = {
    getPSDDistrictName: async (req, res, next) => {
        try{
            const valueQuery = schema.blankData.validate(req.query);
            if (valueQuery.error) throw valueQuery.error;
            next();
        } catch(e) {
            res.status(400).json({
                success: 0,
                message: `Parameter validation error. ${e}`
            })
        }
    }
}