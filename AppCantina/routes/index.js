var express = require('express');
var axios = require("axios")
var env = require('../config/env');
var router = express.Router();
var moment = require('moment');
moment.locale('pt-pt');
var auth = require('../auth/auth')

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

router.get('/logout',function(req, res, next) {
  res.clearCookie('token');
  res.redirect("/");
});

/* GET home page. */
router.get('/home', auth.verifyAuthNotAdmin, function(req, res, next) {

  var startOfWeek = moment().startOf('week')
  var endOfWeek = moment().endOf('week').subtract(2, 'day')
  res.render('home', { title: 'Home',startOfWeek:startOfWeek, endOfWeek:endOfWeek,user:req.user });
});

/* GET buy page. */
router.get('/buy', auth.verifyAuthNotAdmin, function(req, res, next) {
  res.render('buy', { title: 'Comprar senhas' });
});

/* GET admin home page. */
router.get('/adminhome',auth.verifyAuthAdmin,  function(req, res, next) {
  var startOfWeek = moment().startOf('week')
  var endOfWeek = moment().endOf('week').subtract(2, 'day')
  res.render('admin_home', { title: 'Home', startOfWeek:startOfWeek, endOfWeek:endOfWeek });
});

/* POST autentication*/
router.post('/',auth.login);

/* Create user */
router.post('/signup',function(req,res,next){
   req.body.tipo="NE" 
   next()
  }
  ,auth.signup, function(req, res, next) {
    res.redirect('/')
  }
);

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Perfil do Usuário' });
});

/* GET User form page. */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Formulário de Usuários' });
});


module.exports = router;
