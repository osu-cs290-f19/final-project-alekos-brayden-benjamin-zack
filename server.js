var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var eventData = require('./eventData.json');

var app = express();
var port = process.env.PORT || 1324;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res, next) {
  res.statusCode = 200;
  res.render('eventPage', { events: eventData });
});

app.get('*', function (req, res) {
  res.statusCode = 404;
  res.render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
