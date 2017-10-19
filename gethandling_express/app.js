
var express = require('express');
var app = express();
var engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// handler for internal server err
function errorHandler(err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  res.status(500).render('error', { error: err });
}

app.get('/:name', function(req, res, next) {
  var name = req.params.name;
  var getvar1 = req.query.getvar1;
  var getvar2 = req.query.getvar2;
  res.render('hello', { name : name, getvar1 : getvar1, getvar2 : getvar2 });
});

app.use(errorHandler);

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Express server listening on port %s.', port);
});
