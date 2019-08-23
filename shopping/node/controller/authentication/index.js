const auth = require('../../model/authentication');
const session = require('cookie-session')
// const Promise = require('promise');

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        auth.getAllUser().then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    });
}

const verifyUser = (data) => {
    return new Promise((resolve, reject) => {
        auth.verifyUser(data).then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    })
}

const registerUser = (data) => {
    return new Promise((resolve, reject) => {
        auth.checkIfUserExists(data).then(result => {
            if(result.length){
                var recordExists = {"statusCode":'200', "status":'success', 'custom':'Record already exists'};
                resolve(recordExists)
            }else{
                auth.registerUser(data).then(result => {
                    resolve(result);
                }).catch(err => {
                    reject(err);
                })
            }
        }).catch(err => {
            reject(err);
        })
    })
}

module.exports = {
    getAllUser,
    verifyUser,
    registerUser
}