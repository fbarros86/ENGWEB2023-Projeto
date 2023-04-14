var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET buy page. */
router.get('/buy', function(req, res, next) {
  res.render('buy', { title: 'Comprar senhas' });
});

router.post('/', function(req, res, next) {
  res.redirect('/home');
});

module.exports = router;
