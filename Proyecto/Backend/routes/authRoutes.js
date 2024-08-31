const express = require('express');
const { login } = require('../controllers/authController');
const { register } = require('../controllers/authController');
const router = express.Router();

// Ruta para el login
router.post('/login', login);

// Ruta para el registro de usuarios
router.post('/register', register);

module.exports = router;
