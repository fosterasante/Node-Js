var express = require('express');
var createUser = require('../controllers/indexController')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//router.post('/', createUser.createUser)

module.exports = router;
