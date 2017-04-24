/*
reduce Q1
Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
*/
function extractKey(array, key) {
	return array.reduce(function(acc, value) {
		if (value[key] === undefined) {
			return acc;
		} else {
			acc.push(value[key])
			return acc;
		}
	}, [] )
}

extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");

// ["Elie", "Tim", "Matt"]

/*
Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive
*/

function filterLetters(array, letter) {
	return array.reduce(function(acc, value) {
		if (value.toLowerCase() === letter.toLowerCase()) {
			return ++acc;
		} else {
			return acc;
		}
	}, 0)
}

filterLetters(["a","a","b","c","A"], "a"); // 3
filterLetters(["a","a","b","c","A"], "z"); // 0
filterLetters(["a","a","b","c","A"], "B"); // 1

/*
reduce Q3
Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. 
This function should return the array of objects after each key and value has been added. 
You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by 
starting with the actual array!
*/
function addKeyAndValue(array, key, value) {
	return array.reduce(function(acc, val) {
		val[key] = value;
		return array;
	}, array)
}

addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);

/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/
