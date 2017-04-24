/*
forEach Q1 
Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
*/
function printFirstAndLast(array) {
	array.forEach(function(value) {
		console.log(value[0] + value[value.length - 1]);
	})
}



printFirstAndLast(['awesome','example','of','forEach']) 

// ae
// ee
// of
// fh

/*
forEach Q2 
Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.
*/
function addKeyAndValue(array, key, value) {
	array.forEach(function(val) {
		val[key] = value;
	})
}


addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true) 

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

/*
map Q1
Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
*/
function valTimesIndex(array) {
	return array.map(function(value, index) {
		return value * index;
	})
}


valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([5,10,15]) // [0,10,30]

/*
map Q2
Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
*/
function extractKey(array, key) {
	return array.map(function(value) {
		return value[key];
	})
}


extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")

// ["Elie", "Tim", "Matt"]

/*
filter Q1
Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive
*/
function filterLetters(array, letter) {
	return array.filter(function(value) {
		return value.toLowerCase() === letter.toLowerCase();
	}).length;
}

filterLetters(["a","a","b","c","A"], "a"); // 3
filterLetters(["a","a","b","c","A"], "z"); // 0
filterLetters(["a","a","b","c","A"], "B"); // 1

/*
filter Q2
Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:
*/
function filterKey(array, key) {
	return array.filter(function(value) {
		return value[key] === true;
	})
}

filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")

// [{name: "Tim", isInstructor:true, isHilarious:true}]