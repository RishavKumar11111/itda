const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

class PMMasterModel extends Model {}

PMMasterModel.init({
    ITDACode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PMCode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    PMName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PMMobileNo: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'PMMasterModel',
    tableName: 'ProjectManagerMaster',
    timestamps: false
});


module.exports = PMMasterModel;