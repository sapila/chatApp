module.exports.DAO = function() {

    var users = [""];

    return {
            insertUser : function (user, callback) {
                console.log("dao insert");
                users.push(user);

                callback(null);
             },

            getUser : function (user, callback) {
               var found = false;
                    for(var i=0;i<users.length;i++){
                        if(user.username === users[i].usernameReg && user.password === users[i].passwordReg){
                            found = true;
                            callback(null,users[i]);
                        }
                     }
                 
                    if(!found)
                    {
                        var error = new Error("User not found");
                        callback(error, null);
                    }
     
            }
    }
};

