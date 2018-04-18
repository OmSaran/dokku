var express = require('express');
var PORT = process.env.PORT
var app = express()


var listener = app.listen(PORT || 3000, function() { console.log(listener.address().port); })