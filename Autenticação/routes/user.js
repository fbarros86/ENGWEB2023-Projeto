var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var passport = require('passport')
var userModel = require('../models/user')
var auth = require('../auth/auth')

var User = require('../controllers/user')

router.get('/', auth.verificaAcesso, function(req, res){
  res.status(200).jsonp({Authorized: true, id:req.id})
})

router.get('/token', auth.verificaAcesso, function(req, res){
  User.getUser(req.username)
    .then(r=>{
      res.status(200).jsonp(r)
    })
    .catch(e => {
      res.status(500).jsonp({error: e})}) 
})


router.get('/username/:id', auth.verificaAcesso, function(req, res){
  User.getUser(req.params.id)
    .then(dados => res.status(200).jsonp( dados))
    .catch(e => res.status(500).jsonp({error: e}))
})




router.post('/', auth.verificaAcesso, function(req, res){
  User.addUser(req.body)
    .then(dados => res.status(201).jsonp({dados: dados}))
    .catch(e => res.status(500).jsonp({error: e}))
})



router.post('/register', function(req, res) {
  var d = new Date().toISOString().substring(0,19)
  userModel.register(new userModel({ _id:req.body.username,username: req.body.username, email: req.body.email, 
                                      tipo: req.body.tipo,senhas:1 }), 
                req.body.password, 
                function(err, user) {
                  if (err) 
                    res.jsonp({error: err, message: "Register error: " + err})   
  })
})




router.post('/login',passport.authenticate('local'), function(req, res) {
  console.log("Authentication successful");
  jwt.sign(
    { username: req.user.username },
    "Cantina",
    { expiresIn: 3600 },
    function(e, token) {
      if (e) res.status(500).jsonp({ error: "Erro na geração do token: " + e });
      else res.status(201).jsonp({ token: token, tipo:req.user.tipo });
    }
  );
});


router.put('/:id', auth.verificaAcesso, function(req, res) {
  User.editUser(req.params.id, req.body)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na alteração do utilizador"})
    })
})

router.delete('/:id', auth.verificaAcesso, function(req, res) {
  User.deleteUser(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na remoção do utilizador"})
    })
})

module.exports = router;