## Usage with Restify

Restify _usually_ keeps a reference to the http server instance on
`server.server`. Remember, this hasn't been fully tested, I built this
just to check on my own developments and then decided it _could_ be
useful for someone else.

{% sample lang="js" %}

```js
var restify = require('restify')

// create the http server
var server = restify.createServer(/* some config here */)

server.get('/mumbler', require('mumbler')(server.server))
```
