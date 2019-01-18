var database = require('../config/db-connection');

//User Controllers should be implemented here
//DONT FORGET TO USE MODULE exports

module.exports.getUsers = function(req, res, next){
  database.query('SELECT * FROM users', function (error, results, fields) {
    if(error) return next(error);
    return res.send(results);
  });
}

module.exports.test = function(req, res, next) {
  console.log(req.body);
}