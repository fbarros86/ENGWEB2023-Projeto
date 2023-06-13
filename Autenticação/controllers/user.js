var User = require('../models/user')
var jwt = require('jsonwebtoken')


module.exports.list = () =>{
    return User.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getUser = id =>{
    return User.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.addUser = (user) => {
    return User.collection.insertOne(user)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.editUser = (id,user)=>{
    return User.updateOne({_id:id},user)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.deleteUser = id =>{
    return User.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
