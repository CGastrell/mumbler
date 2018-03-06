# mumbler
An express endpoint to send all those `console.log` outputs through socket.io on any endpoint. You know,
just to keep an eye on things while developing...

**Mumbler** will intercept `stdout`/`stderr` and send it through a socket.io connection.


# Do NOT USE WITH `DEBUG=*`
It just explodes, trust me.


## Note
I built Mumbler just to experiment with, but then I thought someone could benefit from it.

This package **HAS NOT BEEN THOROUGHLY TESTED, USAGE ON PRODUCTION IS,
THEREFORE, NOT RECOMMENDED**

The main purpose is just for development as the package **does not
enforce any security** and it will send any `stdout`/`stderr` data to
connected clients on the designated endpoint.


## Install
```bash
npm install mumbler --save
```


## Basic usage
```js
// attach to some endpoint
app.get('/mumbler', mumbler(http));
```

