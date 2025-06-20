const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/patientController');

router.post('/', auth, controller.createPatient);
router.get('/', auth, controller.getPatients);
router.get('/:id', auth, controller.getPatient);
router.put('/:id', auth, controller.updatePatient);
router.delete('/:id', auth, controller.deletePatient);

module.exports = router;
