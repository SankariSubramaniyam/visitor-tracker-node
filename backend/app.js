const express = require('express');

var app = express();  

app.use((req,res,next) => {
    console.log("hello");
    next();
});

module.exports = app;