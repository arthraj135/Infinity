var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('index', { title: 'Product add' });
});

module.exports = router;
