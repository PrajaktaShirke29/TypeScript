const dbQueries = {
    auth: {
        "getAllUser" : "select * from userClient",
        "verifyUser" : "select * from userClient where cEmail=? AND cPassword=?",
        "registerUser": "insert into userClient (cName, cNumber, cEmail, cPassword) values (?,?,?,?)",
        "checkIfUserExists": "select * from userClient where cName=? AND cNumber=? AND cEmail=?",
    }
}

module.exports = dbQueries;