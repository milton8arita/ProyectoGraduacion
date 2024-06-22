const express = require('express');
const router = express.Router();

const estadisticascontroller = require('../controllers/estadisticascontroller')

router.get('/', estadisticascontroller.getEstadisticas);

router.post('/', estadisticascontroller.createEstadisticas);
router.put('/:id', estadisticascontroller.updateEstadisticas);
router.get('/:id', estadisticascontroller.getEstadistica);


module.exports = router;
