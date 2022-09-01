var express = require('express');
var router = express.Router();
var userMiddleware = require('../middleware/usersMiddleware')

/* GET users listing. */
router.get('/', userMiddleware.check);

module.exports = router;
