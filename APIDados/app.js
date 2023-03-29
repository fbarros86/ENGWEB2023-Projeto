var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/cantina';
mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error ...'));
db.on('open',function(){
    console.log("Conexão ao MongoDB realizada com sucesso...")
})

var usersRouter = require('./routes/users');
var reservesRouter = require('./routes/reserves');
var mealsRouter = require('./routes/meals');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/reserves', reservesRouter);
app.use('/meals', mealsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({erro:err});
});

module.exports = app;
