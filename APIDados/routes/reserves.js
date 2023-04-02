var express = require('express');
var router = express.Router();
var Reserve = require('../controler/reserve')

/* GET home page. */
router.get('/', function(req, res, next) {
  Reserve.list()
    .then(Reserves=>{
      res.json(Reserves)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de reservas",error:erro })
    })
});

router.get('/:id', function(req, res, next) {
  Reserve.getReserve(req.params.id)
    .then(Reserve=>{
      res.json(Reserve)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter reserva",error:erro })
    })
});

router.post('/', function(req, res, next) {
  Reserve.addReserve(req.body)
    .then(Reserve=>{
      res.status(201).json(Reserve)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar reserva",error:erro })
    })
});

router.put('/:id', function(req, res, next) {
  Reserve.editReserve(req.params.id,req.body)
    .then(Reserve=>{
      res.json(Reserve)
    })
    .catch(erro=>{
      res.status(604).json({ message: "Erro a atualizar reserva",error:erro })
    })
});

router.delete('/:id', function(req, res, next) {
  Reserve.deleteReserve(req.params.id)
    .then(Reserve=>{
      res.json(Reserve)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar reserva",error:erro })
    })
});

module.exports = router;
