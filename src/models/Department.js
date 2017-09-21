const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    return Department = sequelize.define('Department', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Department',
        createdAt: false,
        updatedAt: false,
    })
};
