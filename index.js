var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('/home/adminrb/Desktop/socketIO/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

	socket.on('typing',function(resp){
	  console.log("someone is typing...");
    io.emit('typing',resp);
	});

  socket.on('delete-the-typing-info',function(resp){
    io.emit('delete-the-typing-info',resp);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
