
module.exports.handler = function (app){


app.get('/', function(req, res) {
	 res.sendFile(__dirname + '/client/index.html');

});

app.post('/login',function(req, res){
	var user = req.body;
	DAO.getUser(user,function(err,users){
		res.send(JSON.stringify(users));
	});
});

app.post('/register',function(req, res){
	var user = req.body;
	DAO.insertUser(user,function(err){
		if(err){
			console.log(err);
			res.send({"error":"Error while trying to register User..."});
		}

		res.send({"response":"Successfull Registration"})
	});
});

app.get('/chatrooms',function(req, res){
	res.send("room")
});

}