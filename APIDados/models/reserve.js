var mongoose = require('mongoose');


var reserveSchema = new mongoose.Schema({
        _id: String,
        idUser:String,
        data:Date,
        tipo:String //vegetariano, normal...
    });


module.exports = new mongoose.model('reserve',reserveSchema);