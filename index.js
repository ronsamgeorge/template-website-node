const express = require('express');
const app = express();
const path = require("path");

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,"./views/index.html"));
});

app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname,"./views/about.html"));
});

app.get('/contact', function(req,res){
res.sendFile(path.join(__dirname,"./views/contact.html"));
});

app.get('*', function(req,res){
    res.status(404).sendFile(path.join(__dirname,"./views/404.html"));
})

app.listen(3000);