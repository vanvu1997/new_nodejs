var express = require('express');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/users');
var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res){
  res.render('index', {
    name: 'vannam',
    age: '11'
  });
});

app.use('/users', userRoutes);

app.listen(port,function(){
  console.log('truy cap tai', port);
})