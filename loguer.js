var express = require('express');
var app = express.Router();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.get('/', function (req, res) {
  res.render('loguer', { title: 'Plantilla nueva', weather: 'Sin clima', error: 'No tiene error' });
});

module.exports = app;