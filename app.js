var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.json());


app.listen(3000);
