var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
        _id: String,
        login:String,
        password: String,
        tipo:String //estudante, não estudante
    });


module.exports = new mongoose.model('user',userSchema);