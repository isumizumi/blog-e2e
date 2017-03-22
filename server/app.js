var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var cors          = require('cors');

var User          = require('./models/user');

// var passport      = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

var index         = require('./routes/index');
var article       = require('./routes/article');
var user          = require('./routes/user');

var mongoose      = require('mongoose');
mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost/blog-e2e')

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//LOCAL STRATEGY
// passport.use(new LocalStrategy(User.authenticate()));
//
// app.use(passport.initialize());
// app.use(passport.session());

app.use(cors());

app.use('/', index);
app.use('/article', article);
app.use('/user', user);

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
