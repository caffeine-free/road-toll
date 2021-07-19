const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

// requests for user management
router.post('/login', controllers.userLogin);
router.post('/register', controllers.userRegister);
router.post('/recover', controllers.userRecover);

// requests for operations management
router.post('/operation', controllers.createOperator);
router.get('/report', controllers.reportData);

module.exports = router;
