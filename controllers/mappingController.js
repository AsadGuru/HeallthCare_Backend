const { Mapping, Doctor, Patient } = require('../models');

exports.assignDoctor = async (req, res) => {
  const mapping = await Mapping.create(req.body);
  res.status(201).json(mapping);
};

exports.getAllMappings = async (req, res) => {
  const mappings = await Mapping.findAll({ include: [Doctor, Patient] });
  res.json(mappings);
};

exports.getDoctorsForPatient = async (req, res) => {
  const mappings = await Mapping.findAll({
    where: { patientId: req.params.patientId },
    include: [Doctor],
  });
  res.json(mappings);
};

exports.removeMapping = async (req, res) => {
  const mapping = await Mapping.findByPk(req.params.id);
  if (!mapping) return res.status(404).json({ message: 'Not found' });
  await mapping.destroy();
  res.json({ message: 'Mapping removed' });
};
