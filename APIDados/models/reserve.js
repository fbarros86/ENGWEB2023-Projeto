var mongoose = require('mongoose');


var reserveSchema = new mongoose.Schema({
        _id: String,
        idUser:String,
        data:Date,
        // falta por o se é almoço ou jantar
        tipo:String //vegetariano, normal...
    });


module.exports = new mongoose.model('reserve',reserveSchema);