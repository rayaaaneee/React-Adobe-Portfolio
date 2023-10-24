var express = require('express');
var cors = require('cors');
require('dotenv').config();
var app = express();
var port = process.env.PORT || 3000;
app.use(cors(port));
app.get('/send', require('./sendMessage').sendMessage);
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port));
});
