var express = require('express');
var router = express.Router();
var blogService = require('./service/blogservice');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello WOrld!");

});

module.exports = router;
