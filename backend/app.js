const express = require('express');

var app = express();  

app.use("/api/visits",(req,res,next) => {
    const visits = [
        {
            visit_id:"12",
            visitor_name:"Mr.kkk"
        },
        {
            visit_id:"14",
            visitor_name:"Mr.mkk"
        }
    ];
    res.json({
        message:"Success",
        visits: visits
    });
});


module.exports = app;