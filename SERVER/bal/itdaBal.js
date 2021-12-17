const { sequelize } = require('../config/config');
const GPMasterModel = require('../models/GPMaster.model');
const VillageMasterModel = require('../models/VilageMaster.model');
exports.getPSDDistrictName = async (req, res) => {
    try {
        console.log(req.session);
        const query = `SELECT distinct SUBSTRING(b."PDSDistrictName", 0, 4) "PDSDistrictName" From "ITDAMaster" a
        inner JOIN "LGDDistrict" b ON a."DistrictCode" = b."DistrictCode"
        WHERE a."UserID"='${req.params.userId}'`;
        const result = await sequelize.query(query);
        res.send(result[0][0]);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    }
}
exports.getBlockList = async (req, res) => {
    try {
        const query = `SELECT c."BlockCode", c."BlockName" From "ITDAMaster" a
        inner JOIN "ITDABlockMapping" b ON a."ITDACode" = b."ITDACode"
		inner join "LGDBlock" c ON b."BlockCode" = c."BlockCode"
        WHERE a."UserID"='${req.params.userId}'`;
        const result = await sequelize.query(query);
        res.send(result[0]);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    }
}
exports.getGPList = async (req, res) => {
    try {
        const GPData = await GPMasterModel.findAll({
            attributes: ["GPCode", "GPName"],
            where: { BlockCode:  req.params.blockCode },
            raw: true
        })
        res.send(GPData);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    }
}
exports.getVillageList = async (req, res) => {
    try {
        const VillageData = await VillageMasterModel.findAll({
            attributes: ["VillageCode", "VillageName"],
            where: { GPCode: req.params.gpCode },
            raw: true
        });
        res.send(VillageData);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    }
}
exports.getRevenueDistrictCode = async (req, res) => {
    try {
        const query = `SELECT b."RevenueDistrictCode" From "ITDAMaster" a
        inner JOIN "LGDDistrict" b ON a."DistrictCode" = b."DistrictCode"
        WHERE a."UserID"='${req.params.userId}'`;
        const result = await sequelize.query(query);
        res.send(result[0][0]);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    }
}