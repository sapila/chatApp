var express = require ('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var server  = app.listen(3000);
var io      = require('socket.io').listen(server);

app.use(express.static('./client'));
app.use(bodyParser.json());
var sessionMidleware = session({
    secret: 'Ult1mAteC00ck1e!!!!',
    resave: true,
    saveUninitialized: true
});
app.use(sessionMidleware);


DAO = require('./DAO.js').DAO();
require('./routes.js').handler(app);

io.use(function(socket, next) {
    sessionMidleware(socket.handshake, {}, next);
});

io.on('connection', function(socket){
  console.log('a user connected '+JSON.stringify(socket.handshake.session) );
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
      io.emit('chat message', socket.handshake.session.username+" : "+msg);
  });
});



 console.log("alive");