//Optional Bonus

function allVowels(array) {
	var counter = 0;
	var storageString = "";
	for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			for (var j = 0; j < array[i].length; j++) {
				if (Array.isArray(array[i][j])) {
					for (var k =0; k < array[i][j].length; k++) {
						if (Array.isArray(array[i][j][k])) {
							storageString += array[i][j][k][0]
						} else {
							storageString += array[i][j][k];
						}
					}
				} else {
					storageString += array[i][j];
				}
			}
		} else {
			storageString += array[i];
		}
	}
	var lowerString = storageString.toLowerCase();

	for(var a = 0; a < lowerString.length; a++) {
		if ("aeiou".indexOf(lowerString[a]) >= 0) {
			counter++;
		}
	}
	return counter;
}






var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

console.log(allVowels(nestedArr)) // 13

// rotate

function rotate(array, number) {
	for (var i = 0; i < number; i++) {
		array.unshift(array[array.length - 1]);
		array.pop();
	}
	return array;
}

console.log(rotate([1,2,3], 1)) // [3,1,2]
console.log(rotate([1,2,3], 2)) // [2,3,1]
console.log(rotate([1,2,3], 3)) // [1,2,3]

// makeXOGrid

function makeXOGrid(rows, columns) {
	var grid = [];
	for (var i = 0; i < rows; i++) {
		grid[i] = [];
		for (var j = 0; j < columns; j++) {
			if (j % 2 === 0) {
				grid[i].push("X");
			} else if (j % 2 === 1) {
				grid[i].push("O");
			}
		}
	}
	return grid;
}

console.log(makeXOGrid(1,4));

/*/
[["X","O","X","O"]]
/*/

console.log(makeXOGrid(3,2));

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

console.log(makeXOGrid(3,3));
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/