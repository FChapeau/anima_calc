var express = require('express');
var morgan = require('morgan');
var app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use('/static', express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(8081);
