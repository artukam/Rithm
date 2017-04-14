// Object

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

// Using a for loop, console.log all of the numbers in the primeNumbers array.

nestedData["innerData"]["numberData"]["primeNumbers"].forEach(function(value) {
	console.log(value);
});

// Using a for loop, console.log all of the even Fibonnaci numbers.

nestedData["innerData"]["numberData"]["primeNumbers"].forEach(function(value) {
	if (value % 2 === 0) {
		conole.log(value);
	}
});

//Console.log the value "second" inside the order array.

console.log(nestedData["innderData"]["order"][1]);

//Invoke the addSnack function and add the snack "chocolate".
nestedData.addSnack(chocolate);
console.log(nestedData);

// The 'this' keyword is used to replace the whole object path within the function so that you don't need to type out the full path.

// Object 2
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

//addSpeaker

function addSpeaker(speakerName) {
	nestedObject["speakers"].push({name:speakerName});
	return nestedObject;
}

addSpeaker("Christopher");

// addLanguage

function addLanguage(language, greeting) {
	nestedObject["data"]["languages"][language] = {hello:greeting};
	return nestedObject;
}

addLanguage("chinese", "Ni Hao")

// addCountry

function addCountry(country, city, popNumber) {
	nestedObject["data"]["continents"]["europe"]["countries"][country] = {
		capital: city,
		population: popNumber
	};
	return nestedObject;
}

addCountry("France", "Paris", 2244000);

console.log(nestedObject);