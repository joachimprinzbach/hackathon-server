var express = require('express');
var fs = require('fs');
var app = express();
var cors = require('cors');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use(cors());

app.get('/locations', function (req, res) {
    var locations = JSON.parse(fs.readFileSync('locations.json', 'utf8'));
    res.json(locations);
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});