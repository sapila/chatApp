module.exports.DAO = function() {

    var users = ["asd"];

    return {
            insertUser : function (user, callback) {
            console.log("dao insert");
            users.push(user);

            callback(null);
             },

            getUser : function (user, callback) {
                console.log(JSON.stringify(users));

                callback(null, users);
            }
    }
};

