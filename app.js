var router = require('./api/routes');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')

var app = express();
var port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', router);

app.use(cors());

// 500 internal server error handler
app.use(function(err, req, res, next) {
  if (err.statusCode === 404) return next();
  res.status(500).json({
    // Never leak the stack trace of the err if running in production mode
    err: process.env.NODE_ENV === 'production' ? null : err,
    msg: '500 Internal Server Error',
    data: null
  });
});

// 404 error handler
app.use(function(req, res) {
  res.status(404).json({
    err: null,
    msg: '404 Not Found',
    data: null
  });
});

app.listen(port, console.log('listening on port: ' + port));
