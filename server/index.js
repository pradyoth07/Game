var express = require('express')
var app = express()

const servername = "localhost";
const port = 8080;

const simple = require('./simpleController');


app.use('/simple', simple).listen(port);

console.log("running on http://" + servername + ":" + port)