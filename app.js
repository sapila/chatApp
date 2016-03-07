var express = require ('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var server  = app.listen(3000);
var io      = require('socket.io').listen(server);

app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(session({
				 secret: 'Ult1mAteC00ck1e!!!!',
				 resave: true,
    			 saveUninitialized: true
    			}));


DAO = require('./DAO.js').DAO();
require('./routes.js').handler(app);


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});



 console.log("alive");