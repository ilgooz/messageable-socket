# Messageable Socket
This module gives you `socket.send()` and `socket.on('message')` capabilities to your sockets.

## Installation
```
npm install messageable-socket
```

## Usage
```javascript
var socket = MSocket(socket);

socket.send(1, 'messageable', {a: 2}, ['3', 'socket']);
socket.on('message', function(a, b, c, d){
    console.log(a, b, c, d);
});
```

## Examples
Server
```javascript
var net = require('net');
var MSocket = require('messageable-socket');

function connection(sock){
    var socket = MSocket(sock);
    socket.send('a message content');
}

var server = net.createServer(connection);
server.listen(3000);
```

Client
```javascript
var net = require('net');
var MSocket = require('messageable-socket');

var socket = MSocket(net.connect(3000));
socket.on('message', function(message){
    console.log(message);
});
```

Of course you can also send messages from client and receive them on server.
