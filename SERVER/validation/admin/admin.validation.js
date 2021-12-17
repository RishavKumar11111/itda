const schema = require('./admin.schema');


module.exports = {
    getAllItdaList: async (req, res, next) => {
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
    },
    updateItdaDetails: async(req, res, next) => {
        try{
            const valueParams = schema.updateItdaDetailsParams.validate(req.params);
            const valueQuery = schema.blankData.validate(req.query);
            const valueBody = schema.updateItdaDetailsBody.validate(req.body);
            if (valueParams.error) throw valueParams.error;
            if (valueQuery.error) throw valueQuery.error;
            if (valueBody.error) throw valueBody.error;
            next();
        } catch(e) {
            res.status(400).json({
                success: 0,
                message: `Parameter validation error. ${e}`
            })
        }
    },
    getTargetListOfAllItda: async (req, res, next) => {
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
    },
    setItdaTarget: async(req, res, next) => {
        try{
            const valueParams = schema.setItdaTargetParams.validate(req.params);
            const valueQuery = schema.blankData.validate(req.query);
            const valueBody = schema.setItdaTargetBody.validate(req.body);
            if (valueParams.error) throw valueParams.error;
            if (valueQuery.error) throw valueQuery.error;
            if (valueBody.error) throw valueBody.error;
            next();
        } catch(e) {
            res.status(400).json({
                success: 0,
                message: `Parameter validation error. ${e}`
            })
        }
    },
}