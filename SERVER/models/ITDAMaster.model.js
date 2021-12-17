const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');
class ITDAMasterModel extends Model {}

ITDAMasterModel.init({
    ITDACode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    ITDAName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DistrictCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserID: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'ITDAMaster',
    timestamps: false
});


module.exports = ITDAMasterModel;