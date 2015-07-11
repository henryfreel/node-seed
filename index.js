// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

var posts = [
  {
    id: 1,
    content: 'This is test post 1'
    
  },
  {
    id: 2,
    content: 'This is test post 2'
  }
];

// set up root route to respond with 'hello world'
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// set up route for api/users JSON
app.get('/api/posts', function(req, res) {
  res.json(posts);
});


// create new post

app.post('/api/posts', function (req, res) {
  // grab params blog contentfrom form data
  var newPost = req.body;
  console.log(newPost);
  
  // set sequential id (last id in `phrases` array + 1)
  if (posts.length > 0) {
    newPost.id = posts[posts.length - 1].id +  1;
  } else {
    newPost.id = 0;
  }

  // add newPost to `posts` array
  posts.push(newPost);
  console.log(posts);
  
  // send newPhrase as JSON response
  res.json(newPost);
  
  //console.log newPost
  console.log(newPost);  
});

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});

