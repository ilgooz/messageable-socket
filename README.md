# Messageable Socket
This module gives you `socket.send()` and `socket.on('message')` capabilities to your sockets.

## Installation
```
npm install messageable-socket
```

## Usage
```javascript
socket.send(1, 'messageable', {a: 2}, ['3', 'socket']);
socket.on('message', function(a, b, c, d){
    console.log(a, b, c, d);
    // returns: 1, 'messageable', {a: 2}, ['3', 'socket']
});
```

## Examples
*Note that you can send messages and receive them from both side.*

**Server**
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

**Client**
```javascript
var net = require('net');
var MSocket = require('messageable-socket');

var socket = MSocket(net.connect(3000));
socket.on('message', function(message){
    console.log(message);
    // returns: 'a message content'
});
```
