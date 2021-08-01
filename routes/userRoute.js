const express = require('express');
const router = express.Router();
const RegistrationController = require('../controllers/RegistrationController');



router.post("/register", RegistrationController.userRegistration);

module.exports = router;