var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
        _id: String,
        email:String,
        username:String,
        password: String,
        tipo:String,
        senhas:Number,
        notVerified:String
    });


module.exports = new mongoose.model('user',userSchema);