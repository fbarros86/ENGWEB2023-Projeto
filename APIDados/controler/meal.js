var Meal = require('../models/meal')

module.exports.list = () =>{
    return Meal.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getMeal = id =>{
    return Meal.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getMealDate = date =>{
    return Meal.find({"data":date})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.addMeal = (Meal) => {
    return Meal.collection.insertOne(Meal)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.editMeal = (id,Meal)=>{
    return Meal.updateOne({_id:id},Meal)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.deleteMeal = id =>{
    return Meal.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
