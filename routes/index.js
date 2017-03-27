var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/Matrix', function(req, res, next) {
  res.render('Matrix', { title: 'Matrix' });
});

router.get('/BinaryTree', function(req, res, next) {
  res.render('binaryTree', { title: 'Binary Tree' });
});

module.exports = router;
