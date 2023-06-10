var express = require('express');
var axios = require('axios');
var env = require('../config/env');
var router = express.Router();
var moment = require('moment');
moment.locale('pt-pt');
var api = 


/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {

  var startOfWeek = moment().startOf('week')
  var endOfWeek = moment().endOf('week').subtract(2, 'day')
  res.render('home', { title: 'Home',startOfWeek:startOfWeek, endOfWeek:endOfWeek });
});

/* GET buy page. */
router.get('/buy', function(req, res, next) {
  res.render('buy', { title: 'Comprar senhas' });
});

/* GET admin home page. */
router.get('/adminhome', function(req, res, next) {
  var startOfWeek = moment().startOf('week')
  var endOfWeek = moment().endOf('week').subtract(2, 'day')
  res.render('admin_home', { title: 'Home', startOfWeek:startOfWeek, endOfWeek:endOfWeek });
});

/* POST autentication*/
router.post('/', function(req, res, next) {
  res.redirect('/home');
});

/* Create user */
router.post('/signup', function(req, res, next) {
  req.body.tipo = "student"
  //verificar se é estudante e se for _id é igual ao número dele
  axios.post(env.api+'/users',req.body )
    .then(response=>
        res.redirect('/')
      )
    .catch(erro=>
      res.render('error',{error:erro,message:'Unable to add user'}))
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Perfil do Usuário' });
});

/* GET User form page. */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Formulário de Usuários' });
});


module.exports = router;
