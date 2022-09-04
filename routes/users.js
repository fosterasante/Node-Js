var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', userController.check);

module.exports = router;
