var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// Q1
programming["languages"].push("Go");

//Q2

programming["difficulty"] = 7;

//Q3

delete programming["jokes"];

//Q4
programming["isFun"] = true;

//Q5
programming["languages"].every(function(value) {
	return console.log(value);
})

//Q6
for(var prop in programming) {
	console.log(prop);
}

//Q7
for (var prop in programming) {
	console.log(programming[prop]);
}