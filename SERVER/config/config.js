const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'itda',
    password: 'Test@1234',
    port: 5432
});
exports.dbConfig = {
    DB_NAME: `itda`,
    pool: pool
}
exports.TABLE = {
    DISTRICT_MASTER: `"LGDDistrict"`,
    SUB_DIVISION_MASTER: `"LGDSubDivision"`,
    USERS: `"Users"`,
    ITDA_MASTER: `"ITDAMaster"`,
    TARGET_MASTER: `"Target"`
}
const { Sequelize } = require('sequelize');
const user = 'postgres';
const host = 'localhost';
const database = 'itda';
const password = 'Test@1234';
const port = 5432;
exports.sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
})