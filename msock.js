var Message = require('amp-message');
var Parser = require('amp').Stream;

module.exports = MSocket;

function MSocket(socket){
    var parser = new Parser;
    socket.pipe(parser);

    parser.on('data', function(buf){
        var msg = new Message(buf);
        socket.emit.apply(socket, ['message'].concat(msg.args));
    });

    socket.send = function(){
        var args = [].slice.call(arguments);
        var msg = new Message(args);
        var buf = msg.toBuffer();
        socket.write(buf);
    };

    return socket;
}