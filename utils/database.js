const Sequelize = require('sequelize');

const sequelize = new Sequelize('fake_store','root','Pass@123',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;