var mongoose = require('mongoose');


var mealSchema = new mongoose.Schema({
        _id: String,
        dia_da_semana:String,
        refeicao:String, //almoco e jantar
        data:Date,
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
        sal:Number  
    });


module.exports = new mongoose.model('meal',mealSchema);