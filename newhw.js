// This line prevents the page from refreshing when a user hits "enter".
//event.preventDefault();
$(document).ready(function() {
	var topics = ["music","laugh","sleep","cars"];

	function renderButtons(){
		$("#buttonSection").empty();
		for(var i=0; i<topics.length; i++){
			
			var buttonMaker = $("<button>");
			buttonMaker.addClass("topicButtons")
		   	buttonMaker.attr("data-name", topics[i]);
		   	buttonMaker.text(topics[i]);
		    $("#buttonSection").append(buttonMaker);
		};
	};



	$("#inputButton").on("click", function(event) {
		event.preventDefault();
		var userInput = $("#inputBar").val().trim();
		if(!userInput){
			alert("That won't give you any results!");

		}
		else{
		topics.push(userInput);
		renderButtons();
		}		

	});

	$(document).on("click", ".topicButtons", displayGif)


	renderButtons();



	function displayGif() {
			$("#gifMenu").empty();
	        var gif = $(this).attr("data-name");

	        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";

	        
	    	$.ajax({
	          url: queryURL,
	          method: "GET"
	        }).done(function(response) {
	        


	        var results = response.data;
	        
	        for (var i = 0; i < results.length; i++) {
	            var gifDiv = $("<div class='item'>");
	            var gifImage = $("<img>");
	            gifImage.attr("src", results[i].images.fixed_height.url);
	            //gifImage.attr("data-still", results[i].images.fixed_height.url);
	            //gifImage.attr("data-animate", results[i].images.fixed_height.url);
	            //gifImage.attr("data-state", "still");
	            
	            var rating = results[i].rating;
	            var p = $("<p>").text("Rating: " + rating);

	            gifDiv.append(gifImage);
	            gifDiv.append(p);
	           	$("#gifMenu").prepend(gifDiv);
	        }

	        });


	};


	//$(".item").on("click", function() {
	      
	      //var state = $(this).attr("data-state");
	      
	      
	      
	      //if (state === "still") {
	        //$(this).attr("src", $(this).attr("data-animate"));
	        //$(this).attr("data-state", "animate");
	      //} else {
	        //$(this).attr("src", $(this).attr("data-still"));
	        //$(this).attr("data-state", "still");
	      //}
	//});
});



