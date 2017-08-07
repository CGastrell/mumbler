var iof = require('socket.io');
var intercept = require('./interceptor')
var path = require('path')
var fs = require('fs')

function mumbler (http) {
  var io = iof(http)
  var unhook_intercept = intercept(
    function(txt) {
      io.emit('log', txt)
    }
    // , function(txt) {
    //   io.emit('log', txt)
    // }
  );

  return function (req, res) {
    // res.render(path.resolve(__dirname + '/index.pug'), { pathname: req.route.path })
    // res.sendFile(__dirname + '/index.html')
    fs.readFile(__dirname + '/index.html', function (err, content) {
      if (err) {
        console.warn('Couldn\'t get mumbler output file')
        console.warn(err)
        res.write('Error: could not get file');
        res.end();
        return
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(content);
      res.end();
    })
  }
}

module.exports = mumbler
