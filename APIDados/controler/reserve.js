var Reserve = require('../models/reserve')

module.exports.list = () =>{
    return Reserve.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getReserve = id =>{
    return Reserve.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getUserReserves = idUser => {
    return Reserve.find({ idUser: idUser })
                .then(dados => {
                    return dados;
                })
                .catch(erro => {
                    return erro;
                });
  };

module.exports.addReserve = (Reserve) => {
    return Reserve.collection.insertOne(Reserve)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.editReserve = (id,Reserve)=>{
    return Reserve.updateOne({_id:id},Reserve)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.deleteReserve = id =>{
    return Reserve.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
