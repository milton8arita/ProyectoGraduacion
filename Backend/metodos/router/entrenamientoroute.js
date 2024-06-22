const express = require('express');
const router = express.Router();

const entrenamientoscontroller = require('../controllers/entrenamientoscontroller')

router.get('/', entrenamientoscontroller.getEntrenamientos);

router.post('/', entrenamientoscontroller.createEntrenamiento);
router.put('/:id', entrenamientoscontroller.updateEntrenamiento);
router.get('/:id', entrenamientoscontroller.getEntrenamiento);
router.delete('/:id', entrenamientoscontroller.deleteEntrenamiento);


module.exports = router;
