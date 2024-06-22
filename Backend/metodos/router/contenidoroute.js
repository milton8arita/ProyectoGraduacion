const express = require('express');
const router = express.Router();

const contenidocontroller = require('../controllers/contenidocontroller')

router.get('/', contenidocontroller.getContenidos);

router.post('/', contenidocontroller.createContenido);
router.put('/:id', contenidocontroller.updateContenido);
router.get('/:id', contenidocontroller.getContenido);
router.delete('/:id', contenidocontroller.deleteContenido);


module.exports = router;
