var mongoose = require('mongoose');


var reserveSchema = new mongoose.Schema({
        _id: String,
        idUser:String,
        data:String,
        refeicao:String,
        tipo:String //vegetariano, normal...
    });


module.exports = new mongoose.model('reserve',reserveSchema);