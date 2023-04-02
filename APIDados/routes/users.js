var express = require('express');
var router = express.Router();
var User = require('../controler/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  User.list()
    .then(Users=>{
      res.json(Users)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de utilizadores",error:erro })
    })
});

router.get('/:id', function(req, res, next) {
  User.getUser(req.params.id)
    .then(User=>{
      res.json(User)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter utilizador",error:erro })
    })
});

router.post('/', function(req, res, next) {
  User.addUser(req.body)
    .then(User=>{
      res.status(201).json(User)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar utilizador",error:erro })
    })
});

router.put('/:id', function(req, res, next) {
  User.editUser(req.params.id,req.body)
    .then(User=>{
      res.json(User)
    })
    .catch(erro=>{
      res.status(604).json({ message: "Erro a atualizar utilizador",error:erro })
    })
});

router.delete('/:id', function(req, res, next) {
  User.deleteUser(req.params.id)
    .then(User=>{
      res.json(User)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar utilizador",error:erro })
    })
});

module.exports = router;
