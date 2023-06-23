var express = require('express');
var axios = require("axios")
var env = require('../config/env');
var router = express.Router();
var moment = require('moment');
moment.locale('pt-pt');
var auth = require('../auth/auth')
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const upload = multer({ dest: 'uploads/', fieldname: 'file' });
const fs = require('fs');
 

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
  req.week=0
  if(req.query.week) req.week=req.query.week
  req.tipo="N"
  if(req.query.type) req.tipo=req.query.type
  req.startOfWeek = moment().startOf('week').add(req.week,'week');
  req.endOfWeek = moment().endOf('week').subtract(2, 'day').add(req.week,'week');
  req.listMeals = {};

  const requests = [];
  for (let i = 0; i < 5; i++) {
    const date = moment().startOf('week').add(i, 'day').add(req.week,'week').format('DD-MM-YYYY');
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
      res.render("error", { error: e });
    });
}

function getListMealsandReserves(req, res, next) {
  req.week=0
  if(req.query.week) req.week=req.query.week
  req.tipo="N"
  if(req.query.type) req.tipo=req.query.type

  req.startOfWeek = moment().startOf('week').add(req.week,'week');
  req.endOfWeek = moment().endOf('week').subtract(2, 'day').add(req.week,'week');
  req.listMeals = {};

  const requests = [];
  for (let i = 0; i < 5; i++) {
    const date = moment().startOf('week').add(i, 'day').add(req.week,'week').format('DD-MM-YYYY');
    const request = axios.get("http://localhost:7778/meals/date/" + date)
      .then(r => {
        req.listMeals[date] = r.data;
      })
      .catch(e => {
        res.render("error", { error: e });
      });

    requests.push(request);
  }

  const request = axios.get("http://localhost:7778/reserves/user/" + req.user.username)
      .then(r => {
        req.reserves = r.data;
      })
      .catch(e => {
        res.render("error", { error: e });
      });
      requests.push(request);
      
  Promise.all(requests)
    .then(() => {
      // transformar num dicionário maybe
      next();
    })
    .catch(error => {
      res.render("error", { error });
    });
}

/* GET home page. */
router.get('/home', auth.verifyAuthNotAdmin, getListMealsandReserves,function(req, res, next) {
  res.render('home', { title: 'Home',currentDay:moment(),startOfWeek:req.startOfWeek, endOfWeek:req.endOfWeek,user:req.user,meals:req.listMeals, reserves:req.reserves,week:Number(req.week),tipo:req.tipo});
});

/* GET buy page. */
router.get('/buy', auth.verifyAuthNotAdmin, function(req, res, next) {
  res.render('buy', { title: 'Comprar senhas', user:req.user });
});



/* GET admin home page. */
router.get('/adminhome',auth.verifyAuthAdmin, getListMeals,function(req, res, next) {
  res.render('admin_home', { title: 'Home', startOfWeek:req.startOfWeek, endOfWeek:req.endOfWeek,meals:req.listMeals,week:Number(req.week),tipo:req.tipo });
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
      res.render('form', { title: 'Formulário de Utilizadores', list: response.data});
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
  req.link = '/?info=create';
  next()
},auth.signup);

router.post('/form',auth.verifyAuthAdmin,function(req,res,next){
  req.link = '/form?info=create';
  next()
},auth.signup);


router.post('/form/file',upload.single('file'), (req, res) => {

  fs.readFile(req.file.path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading the file');
      return;
    }
    try {
      const users = JSON.parse(data);
      users.forEach((user) => {
        if (!user.tipo) user.tipo = "NE";
        axios.post("http://localhost:7779/users/register", user)
          .catch(e => {
            console.log(e)
          });
      });
      res.redirect('/form');
    } catch (error) {
      console.error(error);
      res.status(400).send('Error parsing the JSON file');
    }
  });
});

router.post('/form/edit/:id',auth.verifyAuthAdmin,function(req,res,next){
  axios.delete("http://localhost:7778/users/"+req.params.id)
    .then(res=>{
      req.link = '/form';
      next()
    })
    .catch(err=> res.render("error",{"error":err}))
},auth.signup);

router.post('/add/:tipo/:data',auth.verifyAuthAdmin,function(req,res,next){
  req.body._id=uuidv4()
  req.body.refeicao=req.params.tipo
  req.body.data = req.params.data
  axios.post("http://localhost:7778/meals/",req.body)
    .then(r=>{
        res.redirect("/adminhome?week="+req.query.week)
    })
    .catch(e=>{
        res.redirect("/adminhome?info=failtoadd")//colocar pop up a dizer que falhou
    })
})

router.post('/edit/:tipo/:data',auth.verifyAuthAdmin,function(req,res,next){
  axios.put("http://localhost:7778/meals/"+req.params.tipo+"/"+req.params.data,req.body)
  .then(r=>{
      res.redirect("/adminhome?week="+req.query.week)
  })
  .catch(e=>{
      res.redirect("/adminhome?info=failtoedit")//colocar pop up a dizer que falhou
  })


})





module.exports = router;
