var app = require('express')();
var http = require('http').Server(app);

var mumbler = require('../')
var debug = require('debug')('mumbler:test')

// attach to some endpoint
app.get('/mumbler', mumbler(http));

http.listen(3000, function(){
  console.log('Open http://localhost:3000/mumbler on your browser')
});

// spit some output constantly so we can check output
setInterval(function() {
  console.log(new Date())
  debug(new Date())
}, 1000)
