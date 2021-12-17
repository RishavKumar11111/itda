const schema = require('./auth.schema');


module.exports = {
    signIn: async(req, res, next) => {
        try{
            const valueQuery = schema.blankData.validate(req.query);
            const valueBody = schema.signInBody.validate(req.body);
            if (valueQuery.error) throw valueQuery.error;
            if (valueBody.error) throw valueBody.error;
            next();
        } catch(e) {
            res.status(400).json({
                success: 0,
                message: `Parameter validation error. ${e}`
            })
        }
    }
}