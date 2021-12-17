const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

class GPMasterModel extends Model {}

GPMasterModel.init({
    GPCode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    GPName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    BlockCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SubDivisionCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SubDistrictCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    DistrictCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: `GPMasterModel`,
    tableName: 'LGDGP',
    timestamps: false
});

module.exports = GPMasterModel;