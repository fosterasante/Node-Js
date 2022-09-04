var express = require('express');

const check = function(req, res, next){
    if(3 + 2 == 6){
    
        res.send('You had the answer correct');

    }

        res.redirect("index")
   
}

module.exports = {check};