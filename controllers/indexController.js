var express = require('express');

const createUser = function(req, res, next) {
    console.log(req.body);
    res.redirect('/')
    //next()
}

module.exports = {createUser}