const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// Rutas públicas
router.post('/register', userController.register);
router.post('/login', userController.login);

// Rutas protegidas
router.use(authMiddleware.protect);
router.get('/profile', userController.getProfile);

//Define rutas y middlewares
//agrupar por rutas y nivel de acceso
//Importar controllers correspondientes

module.exports = router;