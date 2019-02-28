var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var app = express();
app.pubdir = path.join(__dirname, 'public');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(app.pubdir));


app.use('/dist', express.static(path.join(path.dirname(require.resolve('web3')), 'dist/')));
app.use('/dist', express.static(path.join(path.dirname(require.resolve('jquery')), '')));

app.use('/', router);


module.exports = app;
