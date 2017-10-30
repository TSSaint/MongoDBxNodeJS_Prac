var express = require('express');
var app = express();
var engines = require('consolidate');
var bodyParser = require('body-parser');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
:
// Handles internal server err
function errorHandler(err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  res.status(500).render('error_template', { error: err });
}

app.get('/', function( req, res, next) {
  res.render('fruitPicker', {'fruits': ['watermelon','banana','apple','mango','peach','grape','papaya','pineapple' ]});
});

app.post('/favorite_fruit', function(req, res, next) {
  var favorite = req.body.fruit;
  if (typeof favorite == 'undefined') {
    next(Error('Choose a fruit!'));
  } else {
    res.send("Looks like your favorite fruit is a(n) " + favorite + "!");
  }
});

app.use(errorHandler);

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Express server listening on port %s.', port);
});
