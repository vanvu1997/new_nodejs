var express = require('express');
var shortid = require('shortid');

var db = require('../db');
var controller = require('../controllers/user.controller');
var validate = require('../validate/user');

var router = express.Router();

/* GET users listing. */
router.get('/', controller.index);

router.get('/cookie', function(req, res, next){
	res.cookie('user-id', 12345);
	res.send('hello');
});
router.get('/search', controller.search);
router.get('/create', controller.create);
router.post('/create', validate.postCreate, controller.postCreate);

router.get('/:id', controller.get)

module.exports = router;
