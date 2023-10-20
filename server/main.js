var express = require('express');
var cors = require('cors');
require('dotenv').config();
var app = express();
var port = process.env.PORT || 3000;
app.use(cors(port));
app.get('/', function (req, res) {
    res.json({ message: 'hello world' });
});
app.get('/send/:message', function (req, res) {
    console.log(req.params.message);
});
app.post('/send', function (req, res) {
    console.log(req.query);
});
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port));
});
