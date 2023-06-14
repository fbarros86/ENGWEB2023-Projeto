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

module.exports.addMeal = (meal) => {
    return Meal.collection.insertOne(meal)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.editMeal = (id,meal)=>{
    return Meal.updateOne({_id:id},meal)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.editMealDate = (date,tipo,meal)=>{
    return Meal.updateOne({data:date,refeicao:tipo},meal)
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
