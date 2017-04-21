$(document).ready(function() {
	var $form = $("form");
	var $table = $("table");
	var storage = [];
	
	//Create new form item
	$form.on("submit", function(event) {
		event.preventDefault();
		createRow($("#movie-title").val(), $("#movie-rating").val());
	})

	//Create row function
	function createRow(title, rating) {
		var newRow = $("<tr>");
		var newMovie = $("<td>");
		var newRating = $("<td>");
		var newDelete = $("<td>");
		var newButton = $("<button>")
		newRow.addClass("table-text");
		newMovie.addClass("col-md-6");
		newMovie.text(title);
		newRating.text(rating);
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
		storage.push({
			movieTitle: title,
			movieRating: rating
		});
	}
	//Sort movies by ascending order


	//Sort objects in array by titles
	function sortTitlesArray(array, direction) {
		var valuesArray = [];
		var objectsArray = [];
		for (var i = 0; i < array.length; i++) {
			valuesArray.push(array[i]["movieTitle"]);
		}
		if (direction === "ascending") {
			valuesArray.sort();
		} else if (direction === "descending") {
			valuesArray.sort().reverse();
		}
		for (var j = 0; j < valuesArray.length; j++) {
			for (var k = 0; k < array.length; k++) {
				if (valuesArray[j] === array[k]["movieTitle"]) {
					objectsArray.push(array[k]);
				}
			}
		}
		return objectsArray;
	}

	//Sort objects in array by ratings
	function sortRatingsArray(array, direction) {
		var valuesArray = [];
		var objectsArray = [];
		for (var i = 0; i < array.length; i++) {
			valuesArray.push(array[i]["movieRating"]);
		}
		if (direction === "ascending") {
			valuesArray.sort(function(a,b) {return a - b});
		} else if (direction === "descending") {
			valuesArray.sort(function(a,b) {return b - a});
		}
		for (var j = 0; j < valuesArray.length; j++) {
			for (var k = 0; k < array.length; k++) {
				if (valuesArray[j] === array[k]["movieRating"]) {
					objectsArray.push(array[k]);
				}
			}
		}
		return objectsArray;
	}

	//Create rows from arrays with objects
	function createRowsFromArray(array) {
		for (var i = 0; i < array.length; i++) {
			createRow(array[i]["movieTitle"], array[i]["movieRating"]);
		}
	}
})