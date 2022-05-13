//node libraries
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var mongodb='mongodb+srv://Prakriti:arijit%23singh@cluster0.7t5bu.mongodb.net/ClinicWebsite?retryWrites=true&w=majority';
var cors=require("cors");

mongoose.connect(mongodb,{useNewUrlParser:true, useUnifiedTopology:true});
var db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error'))
//modules from routes directory
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var cosmeticservicesRouter = require('./routes/cosmeticServices');
var generalServicesRouter = require('./routes/generalServices');
var surgicalServicesRouter = require('./routes/surgicalServices');
var formRouter = require('./routes/form');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//add middleware libraries to the request handling chain
//middleware- perform some functions on the request/ response and then call the next function in the stack, whetehr it's more middleware or a route handler
// some middleware tasks can be serving static files, error handling, compressing http responses, cookies, sessions, userauth, logging
app.use(cors());
app.use(logger('dev'));
app.use(express.json());// to populate request body with formm fields
app.use(express.urlencoded({ extended: false }));// to populate request body with form fields.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//to serve all static files.
//add our route handling code to the request handling chain
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/cosmeticServices', cosmeticServicesRouter);
app.use('/generalServices', generalServicesRouter);
app.use('/surgicalServices', surgicalServicesRouter);
app.use('/bookAppointment', formRouter);

// Middleware for error handling
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
  res.render('error');
});



module.exports = app;
