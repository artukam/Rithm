/*
What is a closure?
A closure is a function construct that allows an inner function to access variables from an outer function so long as the inner function is called with return.

List two reasons why closures are useful.
Closures can allow us to create private variables that can only be modified using provided messages.  It is also useful for refactoring and making our code read/flow better.

What is a module?
A module is a piece of code that can be reused multiple times.

What is the arguments array-like object?
The arguments array-like object is an object with a similar structure as an array which stores arguments provided in a function.  It can be involved within
a function with arguments[x].

Why do we call arguments an array-like-object?
Because arguments does not have the same methods avaiable as an array does.  For example, arguments has a length method but it does not have a push method.

*/

function createCounter () {
	var counter = 0;
	return function() {
		return counter++;
	}
}

var firstCounter = createCounter();

firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

var secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4