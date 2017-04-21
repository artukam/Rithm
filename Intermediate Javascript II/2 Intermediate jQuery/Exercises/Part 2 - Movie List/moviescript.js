$(document).ready(function() {
	var $form = $("form");
	var $table = $("table");
	var $tableBody = $("tbody");
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
		$tableBody.append(newRow);
		newRow.append(newMovie);
		newRow.append(newRating);
		newRow.append(newDelete);
		newDelete.append(newButton);
		newButton.on("click", function(event){
			event.preventDefault();
			if (storage.length > 0) {
				for (var i = 0; i < storage.length; i++) {
					if (storage[i]["movieTitle"] === newMovie.text()) {
						storage.splice(i,1);
						break;
					}
				}
			}
			localStorage.setItem("MovieList", JSON.stringify(storage))
			newRow.remove();
		})
		storage.push({
			movieTitle: title,
			movieRating: rating
		});
		localStorage.setItem("MovieList", JSON.stringify(storage));
		$form.trigger("reset");
	}
	//Create row function for sort
	function createRowSort(title, rating) {
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
		$tableBody.append(newRow);
		newRow.append(newMovie);
		newRow.append(newRating);
		newRow.append(newDelete);
		newDelete.append(newButton);
		newButton.on("click", function(event){
			event.preventDefault();
			if (storage.length > 0) {
				for (var i = 0; i < storage.length; i++) {
					if (storage[i]["movieTitle"] === newMovie.text()) {
						storage.splice(i,1);
						break;
					}
				}
			}
			localStorage.setItem("MovieList", JSON.stringify(storage))
			newRow.remove();
		})
	}

	//Sort movies by ascending order (title)
	$("#sort-icon-up-letter").on("click", function(event) {
		if (storage.length > 0) {
			storage = sortTitlesArray(storage, "ascending");
			$tableBody.empty();
			createRowsFromArray(storage);
			localStorage.setItem("MovieList", JSON.stringify(storage));
		}
	})

	//Sort movies by descending order (title)
	$("#sort-icon-down-letter").on("click", function(event) {
		if (storage.length > 0) {
			storage = sortTitlesArray(storage, "descending");
			$tableBody.empty();
			createRowsFromArray(storage);
			localStorage.setItem("MovieList", JSON.stringify(storage));
		}
	})

	//Sort movies by ascending order (rating)
	$("#sort-icon-up-number").on("click", function(event) {
		if (storage.length > 0) {
			storage = sortRatingsArray(storage, "ascending");
			$tableBody.empty();
			createRowsFromArray(storage);
			localStorage.setItem("MovieList", JSON.stringify(storage));
		}
	})

	//Sort movies by descending order (rating)
	$("#sort-icon-down-number").on("click", function(event) {
		if (storage.length > 0) {
			storage = sortRatingsArray(storage, "descending");
			$tableBody.empty();
			createRowsFromArray(storage);
			localStorage.setItem("MovieList", JSON.stringify(storage));
		}
	})


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
					break;
				}
			}
		}
		return objectsArray;
	}

	//Sort objects in array by ratings
	function sortRatingsArray(array, direction) {
		if (direction === "ascending") {
			array.sort(function(a,b) {
				if (a["movieRating"] < b["movieRating"]) {
					return -1;
				} else if (a["movieRating"] > b["movieRating"]) {
					return 1;
				} else {
					return 0;
				}
			});
		} else if (direction === "descending") {
			array.sort(function(a,b) {
				if (b["movieRating"] < a["movieRating"]) {
					return -1;
				} else if (b["movieRating"] > a["movieRating"]) {
					return 1;
				} else {
					return 0;
				}
			});
		}
		return array;
	}

	//Create rows from arrays with objects
	function createRowsFromArray(array) {
		var dummyArray = array.concat();
		for (var i = 0; i < dummyArray.length; i++) {
			createRowSort(dummyArray[i]["movieTitle"], dummyArray[i]["movieRating"]);
		}
	}
	//Import local storage
	var retrieveStorage = JSON.parse(localStorage.getItem("MovieList"));
	if (Array.isArray(retrieveStorage)) {
		storage = retrieveStorage;
	}
	console.log(storage);
	if (storage.length > 0) {
		createRowsFromArray(storage);
	}
})