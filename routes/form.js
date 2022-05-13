var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("This is the form page");
  //res.render('index', { title: 'Total Dental Care' });
});

module.exports = router;
