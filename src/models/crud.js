const sequelize = require('sequelize');
const models = require('./index');

module.exports = {
    getDepartment: function getDepartment() {
        return models.Department.findAll().then(departments => {
            return departments;
        })
    },
    updateDepartment: function updateDepartment(data) {
        return models.Department.update({
                name: data.name,
                description: data.description
            },
            {
                where: {id: data.id}
            }).then(departments => {
                return departments;
            })
    },
    addToDepartment: function addToDepartment(data) {
        return models.Department.create({
            name: data.name,
            description: data.description
        }).then(departments => {
            return departments;
        })
    },
    removeFromDepartment: function removeFromDepartment(data) {
        return models.Department.destroy(
            {
                where: {id: data.id}
            }).then(departments => {
                return departments;
            })
    },

    getEmployee: function getEmployee() {
        return models.Employee.findAll({include: [models.Department]}).then(employees => {
            return employees;
        })
    },
    updateEmployee: function updateEmployee(data) {
        return models.Employee.update({
                firstName: data.firstName,
                lastName: data.lastName,
                departmentId: data.departmentId
            },
            {
                where: {id: data.id}
            }).then(employees => {
                return employees;
            })
    },
    addToEmployee: function addToEmployee(data) {
        return models.Employee.create({
            firstName: data.firstName,
            lastName: data.lastName,
            departmentId: data.departmentId
        }).then(employees => {
            return employees;
        })
    },
    removeFromEmployee: function removeFromEmployee(data) {
        return models.Employee.destroy(
            {
                where: {id: data.id}
            }).then(employees => {
                return employees;
            })
    }
}