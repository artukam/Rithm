//each function

// this function should accept 2 parameters, put them in!
function each(array, fn){
    // put your code inside here!
    for (var i = 0; i < array.length; i++) {
    	fn(array[i]);
    }
}


each([1,2,3,4], function(val){
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

each([1,2,3,4], function(val){
    console.log(val*2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8

//map function

function map (array, fn) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push(fn(array[i]));
	}
	return newArray;
}

var mapExample = map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]

console.log(mapExample);

//reject function

function reject(array, fn) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (fn(array[i])) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

var rejectExampleOne = reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

var rejectExampleTwo = reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]

console.log(rejectExampleOne);
console.log(rejectExampleTwo);