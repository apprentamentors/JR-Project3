var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.json());

console.log(process.env.PORT);
app.listen(process.env.PORT);
