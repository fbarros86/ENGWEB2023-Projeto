var axios = require('axios');

module.exports.verifyAuth = function(req,res,next){
    if(req.cookies && req.cookies.token){
        axios.get("http://localhost:7779/users?token="+req.cookies.token)
            .then(r=>{
                next()
            })
            .catch(e=>{
                res.status(401).jsonp({error: e})
            })
      } 
      else{
        //console.log(req)
        res.redirect('/?e="permission"')
      }  
}

module.exports.verifyAuthAdmin = function(req,res,next){
    if(req.cookies && req.cookies.token){
        axios.get("http://localhost:7779/users?token="+req.cookies.token)
            .then(r=>{
                if(r.data.tipo!="A") res.status(401).jsonp({error: "Utilizador não tem premissões de admin"})
                else next()
            })
            .catch(e=>{
                res.status(401).jsonp({error: e})
            })
      } 
      else{
        //console.log(req)
        res.redirect('/?e="permission"')
      }  
}


module.exports.signup = function (req,res,next){
    axios.post("http://localhost:7779/users/register",req.body)
        .then(r=>{
            next()
        })
        .catch(e=>{
            res.status(401).jsonp({error: e})
        })
}

module.exports.login = function (req,res,next){
    axios.post("http://localhost:7779/users/login",req.body)
    .then(r=>{
            res.cookie("token", r.data.token, { maxAge: 3600000 });
            console.log(r.data)
            if (r.data.tipo=="A") res.redirect("/adminhome")
            else res.redirect("/home")
        })
        .catch(e=>{
            res.status(401).jsonp({error: e})
        })
}

