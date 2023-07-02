require('dotenv').config();
const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
  process.env.API_KEY,process.env.API_SECRET
);

var axios = require('axios');
var env = require('../config/env');


module.exports.verifyAuth = function(req,res,next){
    if(req.cookies && req.cookies.token){
        axios.get(env.authAccessPoint+"users?token="+req.cookies.token)
            .then(r=>{
                next()
            })
            .catch(e=>{
                res.redirect('/?info=wrong')
            })
      } 
      else{
        res.redirect('/?info=permission')
      }  
}


//verifica se está logdado não como admin
module.exports.verifyAuthNotAdmin = function(req,res,next){
    if(req.cookies && req.cookies.token){
         axios.get(env.authAccessPoint+"users/token?token="+req.cookies.token)
            .then(r=>{
                    if(r.data.tipo=="A"){
                        res.redirect('/?info=notuser')
                    } 
                    else if(r.data.notVerified && r.data.notVerified=="true"){
                      res.redirect('/?info=unverified')
                    }
                    else {
                        req.user=r.data
                        next()
                    }
            })
            .catch(e=>{
                //sessão expirou
                res.redirect('/?info=session')
                //res.status(401).jsonp({error: e})
            })
      } 
      else{
        //nao esta ninguem logged in
        res.redirect('/')
      }  
}

module.exports.verifyAuthAdmin = function(req,res,next){
    if(req.cookies && req.cookies.token){
        axios.get(env.authAccessPoint+"users/token?token="+req.cookies.token)
            .then(r=>{
                    if(r.data.tipo!="A") res.redirect('/?info=notadmin')
                    else {
                        req.user=r.data
                        next()
                    }
            })
            .catch(e=>{
                res.redirect('/?info=wrong')
            })
      } 
      else{
        //console.log(req)
        res.redirect('/?info=permission')
      }  
}

function sendMail(req,res){
  console.log(req.body.email)
  const request = mailjet
	  .post("send", {'version': 'v3.1'})
	  .request({
		  "Messages":[
		  		{
		  				"From": {
		  						"Email": "xiquita.barros@gmail.com",
		  						"Name": "Francisca Barros"
		  				},
		  				"To": [
		  						{
		  								"Email": req.body.email,
		  								"Name": req.body.username
		  						}
		  				],
		  				"Subject": "Verifica a tua conta",
		  				"HTMLPart": "<p>Clica <a href='http://localhost:7777/confirm/"+req.body.username+"'>aqui</a> link para verifcar conta.</p> "
		  		}
		  ]
	  })
  request
  	.then((result) => {
  		res.redirect(req.link)
  	})
  	.catch((err) => {
  		console.log(err.statusCode)
  	})
}

module.exports.signupMail = function (req, res, next) {
    axios.post(env.authAccessPoint+"users/register", req.body)
      .then(r => {
        sendMail(req,res)
      })
      .catch(e => {
        if (e.response && e.response.status === 409) {
          res.redirect('/signup?info=exists');
        } else {
          next(e);
        }
      });
  };

  module.exports.signup = function (req, res, next) {
    axios.post(env.authAccessPoint+"users/register", req.body)
      .then(r => {
        res.redirect(req.link)
      })
      .catch(e => {
        if (e.response && e.response.status === 409) {
          res.redirect('/signup?info=exists');
        } else {
          next(e);
        }
      });
  };
  

module.exports.login = function (req,res,next){
    axios.post(env.authAccessPoint+"users/login",req.body)
    .then(r=>{
            res.cookie("token", r.data.token, { maxAge: 3600000 });
            if (r.data.tipo=="A") res.redirect("/adminhome")
            else res.redirect("/home")
        })
        .catch(e=>{
            res.redirect('/?info=wrong')
        })
}

