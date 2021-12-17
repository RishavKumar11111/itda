const { dbConfig, TABLE, sequelize } = require('../config/config');
const db_pool = dbConfig.pool;

exports.getAllItdaList = async (req, res) => {
    try {
        const query = `SELECT a.*, b."ITDAName", c."DistrictName" from "ProjectManagerMaster" a
        INNER JOIN "ITDAMaster" b ON a."ITDACode" = b."ITDACode"
        INNER JOIN "LGDDistrict" c ON b."DistrictCode" = c."DistrictCode"
        ORDER BY c."DistrictName", b."ITDAName" ASC`
        let response = await sequelize.query(query);
        res.send(response[0]);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    }
}
//FIXME: Add update on and update by while updating data
exports.updateItdaDetails = async(req, res) => {
    let client;
    try {
        const data = req.body;
        const ITDACode = req.params.itdaCode;
        client = await db_pool.connect();
        const query = `UPDATE ${TABLE.ITDA_MASTER} SET "Name"='${data.Name}', "MobileNo"='${data.MobileNo}' WHERE "ITDACode"=${ITDACode}`;
        await client.query(query);
        res.send(true);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    } finally {
        if(client) client.release();
    }
}
exports.getTargetListOfAllItda = async (req, res) => {
    let client;
    try {        
        client = await db_pool.connect();
        const query = `SELECT T."Target", T."ITDACode", I."Name", S."SubDivisionName", D."DistrictName" FROM ${TABLE.TARGET_MASTER} T
        INNER JOIN ${TABLE.ITDA_MASTER} I ON I."ITDACode" = T."ITDACode"
        INNER join ${TABLE.SUB_DIVISION_MASTER} S ON I."SubdivisionCode" = S."SubDivisionCode"
        INNER join ${TABLE.DISTRICT_MASTER} D ON I."DistrictCode" = D."DistrictCode"
        ORDER BY D."DistrictCode", S."SubDivisionName" ASC`
        let response = await client.query(query);
        res.send(response.rows);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    } finally {
        if(client) client.release();
    }
}
//FIXME: Add update on and update by while updating data
exports.setItdaTarget = async (req, res) => {
    let client;
    try {
        const data = req.body;
        const ITDACode = req.params.itdaCode;
        client = await db_pool.connect();
        const query = `UPDATE ${TABLE.TARGET_MASTER} SET "Target"='${data.Target}' WHERE "ITDACode"=${ITDACode}`;
        await client.query(query);
        res.send(true);
    } catch (e) {
        res.status(500).send('Unexpected error');
        console.error(e);
    } finally {
        if(client) client.release();
    }
}