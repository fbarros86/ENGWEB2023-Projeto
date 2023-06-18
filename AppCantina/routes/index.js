var express = require('express');
var axios = require("axios")
var env = require('../config/env');
var router = express.Router();
var moment = require('moment');
moment.locale('pt-pt');
var auth = require('../auth/auth')
const { v4: uuidv4 } = require('uuid');

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
  res.redirect("/?info=logout");
});

function getListMeals(req, res, next) {
  req.startOfWeek = moment().startOf('week');
  req.endOfWeek = moment().endOf('week').subtract(2, 'day');
  req.listMeals = {};

  const requests = [];
  for (let i = 0; i < 5; i++) {
    const date = moment().startOf('week').add(i, 'day').format('DD-MM-YYYY');
    const request = axios.get("http://localhost:7778/meals/date/" + date)
      .then(r => {
        req.listMeals[date] = r.data;
      })
      .catch(e => {
        res.render("error", { error: e });
      });

    requests.push(request);
  }

  Promise.all(requests)
    .then(() => {
      next();
    })
    .catch(error => {
      res.render("error", { error });
    });
}

/* GET home page. */
router.get('/home', auth.verifyAuthNotAdmin, getListMeals,function(req, res, next) {
  res.render('home', { title: 'Home',startOfWeek:req.startOfWeek, endOfWeek:req.endOfWeek,user:req.user,meals:req.listMeals, user:req.user});
});

/* GET buy page. */
router.get('/buy', auth.verifyAuthNotAdmin, function(req, res, next) {
  res.render('buy', { title: 'Comprar senhas' });
});



/* GET admin home page. */
router.get('/adminhome',auth.verifyAuthAdmin, getListMeals,function(req, res, next) {
  res.render('admin_home', { title: 'Home', startOfWeek:req.startOfWeek, endOfWeek:req.endOfWeek,meals:req.listMeals });
});



/* GET profile page. */
router.get('/profile', auth.verifyAuthNotAdmin, function(req, res, next) {
  axios.get("http://localhost:7778/users/" + req.user._id)
    .then(response => {
      axios.get("http://localhost:7778/reserves/user/" + req.user._id)
        .then(reserveResponse => {
          res.render('profile', { title: 'Perfil do Usuário', u: response.data, reserves: reserveResponse.data });
        })
        .catch(error => {
        });
    })
    .catch(error => {
    });
});

/* GET User form page. */
router.get('/form', auth.verifyAuthAdmin,function(req, res, next) {
  axios.get("http://localhost:7778/users")
    .then(response => {
      res.render('form', { title: 'Formulário de Usuários', list: response.data});
    })
});

/* GET User edit form page. */
router.get('/form/:id', auth.verifyAuthAdmin,function(req, res, next) {
  axios.get("http://localhost:7778/users/" + req.params.id)
    .then(response => {
      axios.get("http://localhost:7778/users/")
        .then(listResponse => {
          res.render('editForm', { title: 'Formulário de Usuários', list: listResponse.data, u: response.data});
        })
        .catch(error => {
        });
    })
    .catch(error => {
    });
});

/* POST autentication*/
router.post('/',auth.login);

/* Create user */
router.post('/signup',function(req,res,next){
   req.body.tipo="NE" 
   next()
  }
  ,auth.signup, function(req, res, next) {
    res.redirect('/?info=create')
  }
);

router.post('/add/:tipo/:data',auth.verifyAuthAdmin,function(req,res,next){
  req.body._id=uuidv4()
  req.body.refeicao=req.params.tipo
  req.body.data = req.params.data
  axios.post("http://localhost:7778/meals/",req.body)
    .then(r=>{
        res.redirect("/adminhome")
    })
    .catch(e=>{
        res.redirect("/adminhome?info=failtoadd")//colocar pop up a dizer que falhou
    })
})

router.post('/edit/:tipo/:data',auth.verifyAuthAdmin,function(req,res,next){
  axios.put("http://localhost:7778/meals/"+req.params.tipo+"/"+req.params.data,req.body)
  .then(r=>{
      res.redirect("/adminhome")
  })
  .catch(e=>{
      res.redirect("/adminhome?info=failtoedit")//colocar pop up a dizer que falhou
  })


})


module.exports = router;
