// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

var users = [
  {
    name: 'Bob',
    username: 'bobiscool'
  },
  {
    name: 'Julie',
    username: 'julierocks'
  }
];

// set up root route to respond with 'hello world'
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// set up route for /users JSON
app.get('/users', function(req, res) {
  res.json(users);
});


// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});

