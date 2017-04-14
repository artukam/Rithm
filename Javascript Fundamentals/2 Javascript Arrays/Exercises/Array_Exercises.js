var people = ["Greg", "Mary", "Devon", "James"]

// Q1

people.forEach(function(value) {
	console.log(value);
})

//Q2

people.shift();

//Q3

people.pop();

//Q4

people.unshift("Matt");

//Q5

people.push("Arthur");

//Q6

for (var i = 0; i < people.length; i++) {
	if (people[i] === "Mary") {
		console.log(people[i]);
		break;
	} else {
		console.log(people[i]);
	}
}

//Q7

var newPeople = people.slice(2);

//Q8

people.indexOf("Mary");

//Q9

people.indexOf("Foo");

//Q10

var people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1, "Elizabeth", "Artie");

//Q11

var withBob = people.concat("Bob");