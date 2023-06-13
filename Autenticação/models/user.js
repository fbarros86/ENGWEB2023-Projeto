var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');



var userSchema = new mongoose.Schema({
        _id: String,
        email:String,
        username:String,
        password: String,
        tipo:String,
        senhas:Number
    });

userSchema.plugin(passportLocalMongoose);


module.exports = new mongoose.model('user',userSchema);