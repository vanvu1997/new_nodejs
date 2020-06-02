var express = require('express');
var shortid = require('shortid');

var db = require('../db');
var controller = require('../controllers/user.controller');

var router = express.Router();
/* GET users listing. */
router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
router.post('/create', controller.postCreate);

router.get('/:id', controller.get)

module.exports = router;
