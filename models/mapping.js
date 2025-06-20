const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mapping = sequelize.define('Mapping', {
  patientId: DataTypes.INTEGER,
  doctorId: DataTypes.INTEGER,
});

module.exports = Mapping;
