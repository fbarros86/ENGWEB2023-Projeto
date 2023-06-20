var axios = require('axios');

module.exports.verifyAuth = function(req,res,next){
    if(req.cookies && req.cookies.token){
        axios.get("http://localhost:7779/users?token="+req.cookies.token)
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
         axios.get("http://localhost:7779/users/token?token="+req.cookies.token)
            .then(r=>{
                    if(r.data.tipo=="A"){
                        // É admin
                        res.redirect('/?info=notuser')
                        //res.status(401).jsonp({error: "Utilizador é admin, não tem premissões para esta página"})
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
        axios.get("http://localhost:7779/users/token?token="+req.cookies.token)
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


module.exports.signup = function (req, res, next) {
    if (!req.body.tipo) req.body.tipo = "NE";
    axios.post("http://localhost:7779/users/register", req.body)
      .then(r => {
        res.redirect('/?info=create');
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
    axios.post("http://localhost:7779/users/login",req.body)
    .then(r=>{
            res.cookie("token", r.data.token, { maxAge: 3600000 });
            if (r.data.tipo=="A") res.redirect("/adminhome")
            else res.redirect("/home")
        })
        .catch(e=>{
            res.redirect('/?info=wrong')
        })
}

