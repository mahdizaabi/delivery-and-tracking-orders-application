const express = require('express');
const router = express.Router();
const RegistrationController = require('../controllers/UserController');



router.post("/register", RegistrationController.userRegistration);
router.post("/login", RegistrationController.UserLoging);

module.exports = router;