var net = require('net');
var MSocket = require('../msock');

function connection(sock){
    var socket = MSocket(sock);
    socket.send('a message content');
}

var server = net.createServer(connection);
server.listen(3000);