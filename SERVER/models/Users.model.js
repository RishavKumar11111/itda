const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/config');

class UsersModel extends Model {}

UsersModel.init({
    UserID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AccessFailedCount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    IsLoggedIn: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Users',
    timestamps: false
});

module.exports = UsersModel;