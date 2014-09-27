var net = require('net');
var MSocket = require('./msock');

function connection(socket){
    var socket = MSocket(socket);
    console.log('socket came');
    socket.on('end', function(){
        console.log('socket gone')
    })
    socket.on('message', function(){
        console.log(arguments)
    })
    socket.send('ilker')
}

var server = net.createServer(connection);
server.listen(3000);

var client = net.connect(3000);
client = MSocket(client);
client.send(1,2)

client.on('message', function(a){
    console.log(a)
})