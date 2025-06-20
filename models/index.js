const sequelize = require('../config/db');
const User = require('./user');
const Patient = require('./patient');
const Doctor = require('./doctor');
const Mapping = require('./mapping');

User.hasMany(Patient, { foreignKey: 'userId' });
Patient.belongsTo(User, { foreignKey: 'userId' });

Patient.belongsToMany(Doctor, {
  through: Mapping,
  foreignKey: 'patientId',
});
Doctor.belongsToMany(Patient, {
  through: Mapping,
  foreignKey: 'doctorId',
});

module.exports = { sequelize, User, Patient, Doctor, Mapping };
