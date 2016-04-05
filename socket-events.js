module.exports.handler = function (io){

var onlineUsers = [];
var clients = [];

io.on('connection', function(socket){
  
  console.log('a user connected '+JSON.stringify(socket.handshake.session));
  onlineUsers.push(socket.handshake.session.username);
  clients.push(socket);
  io.emit('onlineUsers',onlineUsers);


  socket.on('disconnect', function(){
    console.log('user disconnected');

    var index = onlineUsers.indexOf(socket.handshake.session.username);
  	if (index > -1) {
    	onlineUsers.splice(index, 1);
	   }
	  io.emit('onlineUsers',onlineUsers);

  });
  socket.on('chat message', function(msg){
      io.emit('chat message', socket.handshake.session.username+" : "+msg);
  });


});

}