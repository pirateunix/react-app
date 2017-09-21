const Sequelize = require("sequelize");

const sequelize = new Sequelize('node', 'node', 'node555', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const models = [
    'Department',
    'Employee'
];
exporting = {}
models.forEach(function (model) {
    exporting[model] = sequelize.import(__dirname + '/' + model);
});

exporting.sequelize = sequelize;
exporting.Sequelize = Sequelize;

module.exports = exporting;

exporting.Department.hasMany(exporting.Employee, {foreignKey: 'departmentId'});
exporting.Employee.belongsTo(exporting.Department, {sourceKey: 'depratmentId'});
