function snail(array) {
	var mirrorArray = array.concat();
	var holdingArray =[];
	//for loop
	for (var a = 0; a <= mirrorArray.length; a ++) {
		//concat and remove the first array
		if (mirrorArray[0].length === 0) {
			return holdingArray;
		}
		holdingArray = holdingArray.concat(mirrorArray[0]);
		mirrorArray.shift();
		//pop the values off the last column
		for (var i = 0; i < mirrorArray.length; i++) {
			if (mirrorArray[i].length === 0) {
				return holdingArray;
			}
			holdingArray.push(mirrorArray[i].pop());
			if (mirrorArray[i].length === 0) {
			    mirrorArray.splice(i,1);
			}
		}
		//reverse and concat the last array - and then destroy that whole array
		if (mirrorArray[mirrorArray.length - 1].length === undefined) {
			return holdingArray;
		}

		holdingArray = holdingArray.concat(mirrorArray[mirrorArray.length - 1].reverse());
        mirrorArray.pop();
		//shift the first value of ths arrays in reverse order.
		for (var j = mirrorArray.length - 1; j >=0; j--) {
			if (mirrorArray[j].length === 0) {
				return holdingArray;
			}
			holdingArray.push(mirrorArray[j].shift());
			if (mirrorArray[j].length === 0) {
			    mirrorArray.splice(j,1);
			}
		}
	}
	return holdingArray;
}

var z = [[1,2,3],[4,5,6],[7,8,9]];
var array = [[1,2,3,4], [5,6,7,8],[9,10,11,12], [13,14,15,16]];
var x = snail(z);
console.log(x);
