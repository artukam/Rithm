// 1
for (var i = 0; i < 5; i++) {
	console.log(i);
}

/*
The error is that the condition should be i < 5 rather than i > 5, otherwise the for loop would never execute
*/

//2
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}


/*
The errors is that the condition inside the if statement should be num % 2 === 0 not = (which is an assignor operator rather than a comparative operator)
*/

//3
function loopToFive(){
    for(var i = 0; i <= 5; i++){
        console.log(i);
    }
}

/*
The errors are:
- in the for loop condition statement replace the commas(,) with semicolons (;)
- change the condition to i <= 5
*/

//4 
function displayEvenNumbers(){
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var evenNumbers = [];
    for(var i = 0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8] 

/*

- either change the for loop condition to i < numbers.length or i <= numbers.length - 1
- remove the extra semicolon after i++
- change the statement inside the if statement to numbers[i] % 2 === 0 (2 errors)
- remove the extra semicolon after the if statement condition
- change the execution statement to evenNumbers.push(numbers[i])
- shift the return evenNumber statement to outside the for loop
*/