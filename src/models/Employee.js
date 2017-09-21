const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    return Employee = sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Employee',
        createdAt: false,
        updatedAt: false
    })
};