var mongoose = require('mongoose');


var mealSchema = new mongoose.Schema({
        _id: String,
        refeicao:String, //almoco e jantar
        data:String,
        empratamento:Number,
        sopa:String,
        prato:String,
        acompanhamento1:String,
        acompanhamento2:String,
        energia:Number,
        lipidos:Number,
        lipidosSaturados:Number,
        hidratos:Number,
        acucares:Number,
        fibras:Number,
        proteina:Number,
        sal:Number,
        tipo:String 
    });


module.exports = new mongoose.model('meal',mealSchema);