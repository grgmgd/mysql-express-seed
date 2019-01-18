var express = require('express');
var router = express.Router();

//Schema Controllers
var User = require('./controllers/UserController');


//please add only routers here, if you need to call a function require its class
//DONT IMPLEMENT CONTROLLER FUNCTION HERE!!

router.get('/users', User.getUsers);

router.post('/test', User.test);

//exporting routes to the project
module.exports = router;
