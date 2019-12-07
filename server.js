var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bosyParser = require('body-parser');

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

app.get('/listEvents', function (req, res, next) {
  res.statusCode = 200;
  res.render('listEvents', { events: eventData });
});

app.post('/addEvent', function (req, res, next) {
  // console.log(req.body);
  // fs.writeFile(__dirname + '/eventData.json', JSON.stringify(eventData), function(err){
  //   if(!err){
  //     res.status(200).send();
  //   }
  //   else{
  //     res.status(500).send('Fail to write to json');
  //   }
  // });
  // // res.render('eventPage', { events: req.body });
});

app.get('*', function (req, res) {
  res.statusCode = 404;
  res.render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
