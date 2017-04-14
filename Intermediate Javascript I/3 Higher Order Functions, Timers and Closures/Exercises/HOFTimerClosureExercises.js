//countdown

function countDown(num) {
	var timerId = setInterval(function(){
		if (num === 1) {
		    console.log("Done!")
		    clearTimeout(timerId);
		} else {
			console.log(num - 1);
			num--;
	  }
	},1000);  
}

countDown(4);

//randomGame

function randomGame() {
	var counter = 0;
	var randomNumber = Math.random();
	var timerId = setInterval(function() {
		if (randomNumber > 0.75) {
			console.log("It took " + counter + " tries to find a number higher than 0.75");
			clearTimeout(timerId);
		} else {
			randomNumber = Math.random();
			counter++;
		}
	},1000)
}

randomGame();

//isEven

function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	return false;
}

isEven(2); // true
isEven(3); // false

//isOdd

function isOdd(num) {
	if (num % 2 === 1) {
		return true;
	}
	return false;
}

isOdd(3); // true
isOdd(14); // false

//isPrime

function isPrime(num) {
	if (num <= 1) {
		return false;
	} else if (num <= 3) {
		return true;
	} else if (num % 2 === 0 || num % 3 === 0) {
		return false;
	}
	var i = 5;
	while(i * i <= num) {
		if (num % i === 0 || num % (i + 2) === 0) {
			return false;
		}
		i +=6;
	}
	return true;
}

isPrime(8); // false
isPrime(17); // true

//numberFact
function numberFact(num, fn) {
	return fn(num);
}

numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true

//find

function find(array, fn) {
	for (var i = 0; i < array.length; i++) {
		if (fn(array[i])) {
			return array[i];
		}
	}
	return undefined;
}

find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined

// findIndex

function findIndex(array, fn) {
	for (var i = 0; i < array.length; i++) {
		if (fn(array[i])) {
			return i;
		}
	}
	return undefined;
}

findIndex([8,11,4,27], function(val){return val >= 10}); // 1
findIndex([8,11,4,27], function(val){return val === 7}); // undefined

// specialMultiply

function specialMultiply (num1, num2) {
	if (arguments.length === 2) {
		return num1 * num2
	}
	return function(numC) {
		return num1 * numC;
	}
}

specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function 