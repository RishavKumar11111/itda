const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

class VillageMasterModel extends Model {}

VillageMasterModel.init({
    VillageCode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    VillageName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    GPCode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    modelName: `VillageMasterModel`,
    tableName: 'LGDVillage',
    timestamps: false
});
module.exports = VillageMasterModel;