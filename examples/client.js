var net = require('net');
var MSocket = require('../msock');

var socket = MSocket(net.connect(3000));
socket.on('message', function(message){
    console.log(message);
});