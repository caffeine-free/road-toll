const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

// requests for user managment
router.post('/login', controllers.userLogin);
router.post('/register', controllers.userRegister);
router.post('/recover', controllers.userRecover);

// requests for operations managment
router.post('/operation', controllers.createOperator);
router.get('/report', controllers.reportData);

module.exports = router;
