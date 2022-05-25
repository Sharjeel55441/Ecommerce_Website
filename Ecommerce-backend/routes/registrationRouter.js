const express = require('express');
const RegistrationController = require('../controller/userRegistrationController');
const router = express.Router();

router.post('/create',RegistrationController.userRegistration);

module.exports = router;