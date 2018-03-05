# mumbler
send all those `console.log` outputs through socket.io on any endpoint, you know,
just to keep an eye on things...

**Mumbler** will intercept `stdout`/`stderr` and send it through a socket.io connection.


# Do NOT USE WITH `DEBUG=*`
It just explodes, trust me.


## Note
I built Mumbler just to experiment with, but then I thought someone could benefit from it.

**Remember**: I didn't fully test the package, I got it to work on both a simple
Express app and a Restify one.

This package **HAS NOT BEEN THOROUGHLY TESTED, USAGE ON PRODUCTION IS,
THEREFORE, NOT RECOMMENDED**

The main purpose is just for development as the package **does not
enforce any security** and it will send any `stdout`/`stderr` data to
connected clients on the designated endpoint.


## Install
```bash
npm install mumbler --save
```


## Usage with Express
```javascript
var app = require('express')();
var http = require('http').Server(app);
var mumbler = require('mumbler');

// attach to some endpoint
app.get('/mumbler', mumbler(http));

http.listen(3000, function(){
  console.log('Open http://localhost:3000/mumbler on your browser')
});

// spit some output constantly so we can check output
setInterval(function(){console.log(new Date())}, 1000)
```


## Usage with Restify
Restify _usually_ keeps a reference to the http server instance on
`server.server`. Remember, this hasn't been fully tested, I built this
just to check on my own developments and then decided it _could_ be
useful for someone else.
```javascript
var restify = require('restify')

// create the http server
var server = restify.createServer(/* some config here */)

server.get('/mumbler', require('mumbler')(server.server))
```
