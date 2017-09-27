var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require("multer");
var upload = multer({dest: 'uploads/'});

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/upload', upload.single('file'), function(req, res, next) {
    console.log(req.file);
    return res.json(req.file.size);
})


app.listen(process.env.PORT);
