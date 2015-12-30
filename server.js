var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/locations', function (req, res) {
    var locations = JSON.parse(fs.readFileSync('locations.json', 'utf8'));
    res.json(locations);
});

app.get('/locations')

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});