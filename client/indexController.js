
function register(){

var reguser = {};

reguser.firstName = $("#firstName").val();
reguser.lastName = $("#lastName").val();
reguser.email = $("#email").val();
reguser.usernameReg = $("#usernameReg").val();
reguser.passwordReg = $("#passwordReg").val();
reguser.passwordRegRepeat = $("#passwordRegRepeat").val();	


	// $.post( "http://localhost:3000/register", reguser, function( data ) {
	// 	  alert(JSON.stringify(data));
	// 	});

	$.ajax({
        url : "http://localhost:3000/register",
        type: "POST",
        data: JSON.stringify(reguser),
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        success    : function(data){
        	alert(JSON.stringify(data));
            console.log("Pure jQuery Pure JS object");
        }
    });

}

function login(){
alert("log")
var loguser = {};

loguser.username = $("#username").val();
loguser.password = $("#password").val();

	$.ajax({
        url : "http://localhost:3000/login",
        type: "POST",
        data: JSON.stringify(loguser),
        contentType: "application/json; charset=utf-8",
        dataType   : "json",
        success    : function(data){
        	alert(JSON.stringify(data));
            console.log("Pure jQuery Pure JS object");
        }
    });
}