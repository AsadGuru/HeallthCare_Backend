const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Patient = sequelize.define('Patient', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  disease: DataTypes.STRING,
});

module.exports = Patient;
