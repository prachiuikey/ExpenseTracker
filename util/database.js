const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense_report', 'root','password@0987', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;