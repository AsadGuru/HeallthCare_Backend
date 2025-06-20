const express = require('express');
const router = express.Router();
const controller = require('../controllers/mappingController');

router.post('/', controller.assignDoctor);
router.get('/', controller.getAllMappings);
router.get('/:patientId', controller.getDoctorsForPatient);
router.delete('/:id', controller.removeMapping);

module.exports = router;
