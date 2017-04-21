$(document).ready(function() {
	var $form = $("form");
	var $table = $("table");
	
	//Create new form item
	$form.on("submit", function(event) {
		event.preventDefault();
		var newRow = $("<tr>");
		var newMovie = $("<td>");
		var newRating = $("<td>");
		var newDelete = $("<td>");
		var newButton = $("<button>")
		newRow.addClass("table-text");
		newMovie.addClass("col-md-6");
		newMovie.text($("#movie-title").val());
		newRating.text($("#movie-rating").val());
		newButton.addClass("btn btn-danger");
		newButton.attr("type", "button");
		newButton.text("Delete");
		$table.append(newRow);
		newRow.append(newMovie);
		newRow.append(newRating);
		newRow.append(newDelete);
		newDelete.append(newButton);
		newButton.on("click", function(event){
			event.preventDefault();
			newRow.remove();
		})
	})
})