var express = require('express');
var router = express.Router();
var moment = require('moment');
moment.locale('pt-pt');


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

  var startOfWeek = moment().startOf('week').add(1, 'day')
  var endOfWeek = moment().endOf('week').subtract(1, 'day')
  res.render('home', { title: 'Home',startOfWeek:startOfWeek, endOfWeek:endOfWeek });
});

/* GET buy page. */
router.get('/buy', function(req, res, next) {
  res.render('buy', { title: 'Comprar senhas' });
});

router.post('/', function(req, res, next) {
  res.redirect('/home');
});

/* GET admin home page. */
router.get('/admin/home', function(req, res, next) {
  res.render('admin_home', { title: 'Home' });
});

module.exports = router;
