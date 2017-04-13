//Part 1

// Q1

function difference(num1, num2) {
	return num1 - num2;
}

//Q2

function product(num1, num2) {
	return num1 * num2;
}

//Q3

function printDay(num) {
	if (num > 7 || num < 1) {
		return undefined;
	} else if (num === 7) {
		return "Sunday";
	} else {
		return getDay(num - 1);
	}
}

//Q4 

function lastElement(array) {
	if (array.length === 0) {
		return undefined;
	} else {
		return array[array.length - 1];
	}
}

//Q5

function numberCompare(num1, num2) {
	if (num1 === num2) {
		return "Numbers are equal";
	} else if (num1 > num2) {
		return "First is greater";
	} else if (num2 > num1) {
		return "Second is greater";
	} else {
		return "Something is wrong...";
	}
}

//Q6

function singleLetterCount(word, letter) {
	var lowerLetter = letter.toLowerCase();
	var lowerWord = word.toLowerCase();
	if (lowerWord.indexOf(lowerLetter) === -1) {
		return 0;
	} else {
		var counter = 0;
		for (var i = 0; i < lowerWord.length; i++) {
			if (lowerWord[i] === lowerLetter) {
				counter++;
			}
		}
		return counter;
	}
}

//Part 2

//Q1

function multipleLetterCount(string) {
	var obj = {};
	var stringArray = string.split("");
	stringArray.every(function(value) {
		if (obj[value] === undefined) {
			return obj[value] = 1;
		} else {
			return obj[value]++;
		}
	});
	return obj;
}

//Q2

function arrayManipulation(array, command, location, value) {
	if (command === "remove" && location === "end") {
		return array.pop(array[array.length - 1]);
	} else if (command === "remove" && location === "beginning") {
		return array.shift(array[0]);
	} else if (command === "add" && location === "beginning") {
		array.unshift(value);
		return array;
	} else if (command === "add" && location === "end") {
		array.push(value);
		return array;
	}
}

//Q3

function isPalindrome(string) {
	var reverseString = string.split("").reverse().join("");
	if (string === reverseString) {
		return true;
	} else {
		return false;
	}
}

