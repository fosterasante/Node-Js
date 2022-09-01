var express = require('express');
var router = express.Router();

const check = function(req, res, next){
    if(3 + 3 == 6){
    
        res.send('You had the answer correct');

    }

        res.render("index")
   
}

module.exports = {check};