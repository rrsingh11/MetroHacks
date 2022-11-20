import createError from 'http-errors';
import express from 'express';
import proxy from 'express-http-proxy';
//import * as path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
import hospitalRouter from './routes/hospital.js';
import resourceCategoryRouter from './routes/resources/category.js';
import resourceRouter from './routes/resources/resource.js';
//import indexRouter from './routes/index.js';

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

var unless = function(middleware, ...paths) {
  return function(req, res, next) {
    const pathCheck = paths.some(path => path === req.path);
    pathCheck ? next() : middleware(req, res, next);
  };
};

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/hospital', hospitalRouter);
app.use('/resource/category', resourceCategoryRouter);
app.use('/resource', resourceRouter);
app.use(unless(proxy('127.0.0.1:8080'), '/hospital', '/resource/category', '/resource'));
//app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;

export default app;
