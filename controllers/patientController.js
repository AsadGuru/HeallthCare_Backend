const { Patient } = require('../models');

exports.createPatient = async (req, res) => {
  const patient = await Patient.create({ ...req.body, userId: req.user.id });
  res.status(201).json(patient);
};

exports.getPatients = async (req, res) => {
  const patients = await Patient.findAll({ where: { userId: req.user.id } });
  res.json(patients);
};

exports.getPatient = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Not found' });
  res.json(patient);
};

exports.updatePatient = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Not found' });
  await patient.update(req.body);
  res.json(patient);
};

exports.deletePatient = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Not found' });
  await patient.destroy();
  res.json({ message: 'Deleted' });
};
