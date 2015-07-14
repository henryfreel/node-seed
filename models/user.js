// user.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var postSchema = new Schema({
 
  content: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;