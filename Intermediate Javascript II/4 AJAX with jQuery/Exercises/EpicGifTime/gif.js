$(document).ready(function() {
	$(".gif-form").on("submit", function(event) {
		event.preventDefault();
		$.ajax({
		    method: "GET",
		    url: "http://api.giphy.com/v1/gifs/search",
		    jsonp: "callback",
		    data: {
		        api_key: "dc6zaTOxFJmzC",
		        q: $("#gif-search").val(),
		        limit: "100"
		    },
		    dataType: "json"
		}).then(function(response){
		    console.log(response);
		    $newImg = $("<img>");
		    $newImg.addClass("gif-displayed");
		    $newImg.attr("src",response.data[Math.floor((Math.random()) * response.data.length)].images.fixed_height.url);
		    $(".gif-holder").append($newImg);
		}).catch(function(error){
		    console.log(error);
		})
		$(".gif-form").trigger("reset");
	})	
	$(".btn-remove").on("click", function(event) {
		event.preventDefault();
		$(".gif-holder").empty();
	})



})