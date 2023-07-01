var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var passport = require('passport')
var userModel = require('../models/user')
var auth = require('../auth/auth')

var User = require('../controllers/user')

router.get('/', auth.verificaAcesso, function(req, res){
  res.status(200).jsonp({Authorized: true, id:req.username})
})

router.get('/token', auth.verificaAcesso, function(req, res){
  User.getUser(req.username)
    .then(r=>{
      res.status(200).jsonp(r)
    })
    .catch(e => {
      res.status(500).jsonp({error: e})}) 
})




router.post('/register', function(req, res) {
  try {
    userModel.register(new userModel({ _id:req.body.username, username: req.body.username, email: req.body.email, 
                                        tipo: req.body.tipo, senhas: 0,notVerified:req.body.notVerified }), 
                  req.body.password, 
                  function(err, user) {
                    if (err) {
                      res.status(409).jsonp({ error: err, message: "Register error: " + err });
                    } else {
                      res.jsonp({ message: "Registration successful" });
                    }
                  });
  } catch (error) {
    res.status(500).jsonp({ error: error, message: "Internal server error" });
  }
});





router.post('/login',passport.authenticate('local'), function(req, res) {
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

module.exports = router;