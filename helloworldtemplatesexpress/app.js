var express = require('express');
var app = express();
var engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index', { name : 'Templates' });
});

app.get('/jedi', function(req, res) {
  res.render('jedi');
});

app.get('/sith', function(req, res) {
  res.render('sith');
});

app.use(function(req, res) {
  res.sendStatus(404);
});

var server = app.listen(3000, function() {
var port = server.address().port;
console.log('Express server listening on port %s', port);
});
