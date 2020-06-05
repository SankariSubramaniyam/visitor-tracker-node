const express = require('express');
const path = require('path');

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
app.use('/', express.static(path.join(__dirname,"angular")));
app.use((req,res,next) => {
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname,"angular","index.html"));
});
 
module.exports = app;    