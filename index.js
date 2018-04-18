var express = require('express');
var PORT = process.env.PORT
var app = express()

app.get('/', function(req, res) {
    res.send('Hello world! Om Saran!');
})


var listener = app.listen(PORT || 3000, function() { console.log(listener.address().port); })