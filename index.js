// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose");

// Connect to the database you set up
mongoose.connect("mongodb://localhost/mongoseed");

var Post = require('./models/user');

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
  //find all phrases in db
  Post.find(function (err, posts) {
    console.log(posts);
    res.json(posts);
    
  });
 // console.log(posts);
//  res.json(posts);
});

// create new post
app.post('/api/posts', function (req, res) {
  // create new post with form data (`req.body`)
 

  var newPost = new Post({

    content: req.body.content   
  });

// save new newpost in db
  newPost.save(function (err, savedPost) {
    res.json(savedPost);
  });
});  




// create new post

// app.post('/api/posts', function (req, res) {
//   // grab params blog contentfrom form data
//  console.log("req.body",req.body);
//  var newPost = req.body;
//   // var newPost = {
//   //   content: req.body.content
//   // };
//   console.log("New post: ",newPost);
  
//   // set sequential id (last id in `phrases` array + 1)
//   if (posts.length > 0) {
//     newPost.id = posts[posts.length - 1].id +  1;
//   } else {
//     newPost.id = 0;
//   }

//   // add newPost to `posts` array
//   posts.push(newPost);
//   console.log("Pushing is working");
//   console.log(posts);
  
//   // send newPhrase as JSON response
//   res.json(newPost);
  
  
// });

// update post
app.put('/api/posts/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id
  Post.findOne({_id: targetId}, function (err, foundPost) {
    // update the phrase's word and definition
    foundPost.content = req.body.content;
    

    // save updated phrase in db
    foundPost.save(function (err, savedContent) {
      res.json(savedContent);
    });
  });
});

// delete phrase
app.delete('/api/posts/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id and remove
  Post.findOneAndRemove({_id: targetId}, function (err, deletedPost) {
    res.json(deletedPost);
  });
});


// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});

