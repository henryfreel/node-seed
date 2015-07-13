// 
// APP.JS
// PUT YOUR CUSTOM SCRIPTS AND FUNCTIONS HERE
// NOTE: This is a sample page that will accompany my side project 
//idea to generate the worlds largest startup idea database.
//This code doesnt work as expected for POSTING. 
//The Post code works from postman but gives a reference error
// when trying to update the DOM. 


//WHEN THE DOCUMENT IS FINISHED LOADING RUN THESE SCRIPTS
$(document).ready(function() {
  console.log($) // JQUERY IS WORKING!
  console.log(_) // UNDERSCORE IS WORKING!
  console.log("Ready to code!");

  	//Compile template
	var postTemplate = _.template($("#postTemplate").html());

	//Declare template variables
	var $postList = $('#postList');
	var $newPost = $('#newPost');

//Code to show all posts here
	$.ajax({
		url: "/api/posts",
		type: "GET",
		success: function(data) {
			var postTemplate = _.template($("#postTemplate").html());

			_.each(data, function(post) {
				$("#postList").append(postTemplate(post));
			});
		}
	});


//Code to add new post
$("#newPost").on("submit", function(event) {
	console.log("Submitted form!");
	event.preventDefault();
	

	var $content = {content:$("#newPostText").val()};

	console.log($content);
		
	$.ajax({
		type: "POST",
		contentType: 'application/json',
		dataType: 'json',
		url: "/api/posts",
		data: $content,
		
		success: function() {
		console.log("Sent data!");
		console.log($("#newPost").val());
		console.log($("#newPostText").val());
		$("#postList").append(postTemplate($content));
		//window.location.reload();
		
		},
		error: function() {
			alert("Error!");
		}
	});
 



 //   reset the form
    $newPost[0].reset();
    $('#newPostText').focus();
  });

$("#newPostText").on('input propertychange paste', function() {
    var length = $("#newPostText").val().length;
    var remaining = $("#newPostText").attr("maxlength") - length;
    $("#characters_remaining").html(remaining)
});


});


