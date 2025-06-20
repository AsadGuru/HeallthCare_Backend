const { Doctor } = require('../models');

exports.createDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
};

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
};

exports.getDoctor = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Not found' });
  res.json(doctor);
};

exports.updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Not found' });
  await doctor.update(req.body);
  res.json(doctor);
};

exports.deleteDoctor = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Not found' });
  await doctor.destroy();
  res.json({ message: 'Deleted' });
};
