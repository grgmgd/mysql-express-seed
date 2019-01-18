var mysql = require('mysql');
var config = require('./config');

//mysql connection
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '',
  database : config.database
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('successfully connected to the database on port: ' + connection.config.port + ' on thread ' + connection.threadId);
});

//exporting database connection to the project
module.exports = connection;
