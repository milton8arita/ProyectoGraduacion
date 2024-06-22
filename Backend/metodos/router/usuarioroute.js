const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariocontroller');



router.post('/', usuariosController.createStudentControllerFn);
router.route('/login').post(usuariosController.loginUserControllerFn);


module.exports = router;
