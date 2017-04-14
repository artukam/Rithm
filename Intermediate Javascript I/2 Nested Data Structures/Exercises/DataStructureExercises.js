// Object

var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

// displayCities()

function displayCities() {
	instructorData["additionalData"]["moreDetails"]["citiesLivedIn"].forEach(function(value) {
		console.log(value);
	});
}

displayCities();

// displayHometownData()

function displayHometownData() {
	var hometown = instructorData["additionalData"]["moreDetails"]["hometown"];
	for (var prop in hometown) {
		console.log(hometown[prop]);
	}
}

displayHometownData();

// addDetail(key, value)

function addDetail(key, value) {
	instructorData["additionalData"]["moreDetails"][key] = value;
	return instructorData;
}

addDetail("isHilarious", true);
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
console.log(instructorData["additionalData"]["moreDetails"]);

// removeDetail(key)

function removeDetail(key) {
	delete instructorData["additionalData"]["moreDetails"][key];
	return instructorData;
}

removeDetail('citiesLivedIn');
removeDetail('hometown');
removeDetail('favoriteBasketballTeam');
console.log(instructorData["additionalData"]["moreDetails"]);
