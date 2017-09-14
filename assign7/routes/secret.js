var express = require('express');
var mongo = require('./mongo');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = mongo.data;
  res.send(data);
});

module.exports = router;
