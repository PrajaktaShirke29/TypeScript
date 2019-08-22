const dbQueries = require('../../config/dbQueries');
const con = require('../../config/connection');


// const getAllUser = ( response) => {
//   const allUser = dbQueries.auth.getAllUser;

//   con.query(allUser, (err, res) => {
//     if(err){
//       response(err);
//     }else{
//       console.log(res);
//       response(null, res);
//     }
//   })
// }

const getAllUser =(response) =>{
  return new Promise((resolve, reject) => {
    const allUser = dbQueries.auth.getAllUser;

    con.query(allUser, (err, res) => {
      if(err){
        reject(err);
      }else{
        console.log(res);
        resolve(res);
      }
    })
      
  })
}

const verifyUser= (request, response) =>{
  return new Promise((resolve, reject) => {
    const verifyUser = dbQueries.auth.verifyUser;

    con.query(verifyUser,[request.email, request.password], (err, res) => {
      if(err){
        reject(err);
      }else{
        if(res.length === 0){
          res.json({"status":"", "custom": "Invalid username password"});
          resolve(res);
        }else
          resolve(res);
      }
    })
  })
}

const registerUser = (request, response) =>{
  return new Promise((resolve, reject) => {
    const registerUser = dbQueries.auth.registerUser;

    con.query(registerUser,[request.name, request.number, request.email, request.password], (err, res) => {
      if (err){
        reject(err);
      }else{
         resolve(res);
      }
    })
  })
}

const checkIfUserExists= (request, response) =>{
  return new Promise((resolve, reject) => {
    const verifyUser = dbQueries.auth.checkIfUserExists;

    con.query(verifyUser,[request.name, request.number,request.email], (err, res) => {
      if(err){
        reject(err);
      }else{
        if(res.length === 0){
          res.json({"status":"", "custom": "Invalid username password"});
          resolve(res);
        }else
          resolve(res);
      }
    })
  })
}
module.exports ={
  getAllUser,
  verifyUser,
  registerUser,
  checkIfUserExists
}