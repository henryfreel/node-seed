// 
// APP.JS
// PUT YOUR CUSTOM SCRIPTS AND FUNCTIONS HERE
// 

//WHEN THE DOCUMENT IS FINISHED LOADING RUN THESE SCRIPTS
$(document).ready(function() {
  console.log($) // JQUERY IS WORKING!
  console.log(_) // UNDERSCORE IS WORKING!
  console.log("Ready to code!");

  	//Compile template
	var postTemplate = _.template($('#postTemplate').html());

	//Declare template variables
	var $postList = $('#postList');
	var $newPost = $('#newPost');

//Code to show all wines here
	$.ajax({
		url: "/api/posts",
		type: "GET",
		success: function(data) {
			var template = _.template($("#postTemplate").html());

			_.each(data, function(post) {
				$postList.append(template(post));
			});
		}
	});

});
//Code to add new post
$('#new-post').on("submit", function() {
	var newPost = {
		content: $('#new-post').val(),
		};
	console.log(newPost);	
	$.ajax({
		type: "POST",
		url: "/api/posts",
		data: newPost,
		success: function() {
			window.location.reload();
		},
		error: function() {
			alert("Error!");
		}
	});
 });




// 	//Set up CRUD Functions
// 	//Get
// 	var get = function() {

// 	    $.get('/api/posts', function(data) {
//         var allPosts = data;
//         console.log(allPosts);
//         // iterate through allPhrases
//         _.each(allPosts, function(post) {
//           // pass each phrase object through template and append to view
//           var $postHtml = postTemplate(post);
//           $postList.append($postHtml);
//         });
//         // add event-handlers to phrases for updating/deleting
//        // addEventHandlers();
//       });
// 	 }
    


// 	//Post
// 	var create = function(newPost) {
// 	console.log(newPost);
// 	var postData = {content: $newPost};
// 		console.log(postData);
//       // send POST request to server to create new post
//       $.post('/api/posts', postData, function(data) {
//         // pass phrase object through template and append to view
//         var $postHtml = postTemplate(data);
//         $postList.append($postHtml);

//       });
//     };

// // add event-handlers to phrases for updating/deleting
//     var addEventHandlers = function() {
//       // $('#post-list')
//       //   // for update: submit event on `.update-post` form
//       //   .on('submit', '.update-phrase', function(event) {
//       //     event.preventDefault();
//       //     var phraseId = $(this).closest('.phrase').attr('data-id');
//       //     var updatedWord = $(this).find('.updated-word').val();
//       //     var updatedDefinition = $(this).find('.updated-definition').val();
//       //     phrasesController.update(phraseId, updatedWord, updatedDefinition);
//       //   })
//       //   // for delete: click event on `.delete-phrase` button
//       //   .on('click', '.delete-phrase', function(event) {
//       //     event.preventDefault();
//       //     var phraseId = $(this).closest('.phrase').attr('data-id');
//       //     phrasesController.delete(phraseId);
//       //   });
//     }

//    // var setupView = function() {
//       // append existing phrases to view
//      	get();
      
//       // add event-handler to new-phrase form
//       $newPost.on('submit', function(event) {
//         event.preventDefault();
//         console.log('Form Submitted!');
//         console.log($newPost.val())
//         var newPost = $newPost.val();
//         console.log($newPost);
//         console.log(newPost);
//         create($newPost.val());
        
//        // reset the form
//         $(this)[0].reset();
//         $newPost.focus();
//       });
		
// 		console.log("Line 83 works");
    
//  // };

// //setupView();

// });



	





//  //   // constructor functions - Post
//  //  function Post(content) {
//  //    this.content = content;
//  //  }

//  //  // `Posts.all` contains our seed data
//  //  Post.all = [];
//  //     new Post('Life is beautiful and so are you')

//  //  ];
//  // console.log("Post: "+Post.all)	

//  //  Post.prototype.save = function() {
//  //    // store our new post
//  //    Post.all.push(this);
    
//  //  };

  
//  //  // post.save(post);
//  //   console.log("Post: "+Post.all)


//  //  Post.prototype.render = function() {
//  //    // append our new post to the page
//  //    var $post = $(postTemplate(this));
//  //    this.index = Post.all.indexOf(this);
//  //    // $post.attr('data-index', this.index);
//  //    $postList.append($post);
//  //  };
//  //   console.log("postList:"+$postList)

//  //  // form to create new todo
//  //  var $newPost = $('#new-message');
//  //  console.log("newPost: "+$newPost)

//  //  // element to hold our list of todos
//  //  var $postList = $('#post-list');
// 	// console.log("$postlist: "+$postList)
 
  
//  //  console.log("postTemplate: "+postTemplate)
//  //  // append existing post (from seed data) to `$postList`
//  //  // `_.each` is an "iterator" function provided by Underscore.js
//  //  _.each(Post.all, function (post, index) {
//  //    post.render();
//  //  });
//  //  console.log("Post: "+Post.all)

//  //  // submit form to create new post
//  //  $newPost.on('submit', function(event) {
//  //    event.preventDefault();

//  //    // create new post object from form data
    
//  //    var postContent = $('#new-message-text').val();
//  //    var post = new Post(postContent);
//  //    console.log(Post.all)
//  //    // save toDo
//  //    post.save();

//  //    // render toDo
//  //    post.render();

//     // reset the form
// //     $newPost[0].reset();
// //     $('#new-message-text').focus();
// //   });

// // $("#new-message-text").on('input propertychange paste', function() {
// //     var length = $("#new-message-text").val().length;
// //     var remaining = $("#new-message-text").attr("maxlength") - length;
// //     $("#characters_remaining").html(remaining)
// // });



