//Code wars - incomplete
function uncompress(music) {
  var holdingArray = [];
  var copyArray = music.split(",");
  var start;
  var end;
  var storeArray;
  for (var i = 0; i < copyArray.length; i++) {
    if (typeof(parseInt(copyArray[i])) === "number") {
      holdingArray.push(parseInt(copyArray[i]));
    } else if (copyArray[i].indexOf("*") > 0){
      storeArray = copyArray[i].split("*")
      start = storeArray[0];
      end = storeArray[1];
      for (var j = 0; j < end; j++) {
        holdingArray.push(parseInt(start));
      }
    } else if (copyArray[i].length === 3) {
      if (parseInt(copyArray[i][0]) < parseInt(copyArray[i][2])) {
        holdingArray = holdingArray.concat(sequence(parseInt(copyArray[i][0]), parseInt(copyArray[i][2]), "ascending"));
      } else {
        holdingArray = holdingArray.concat(sequence(parseInt(copyArray[i][2]), parseInt(copyArray[i][1]), "descending"));
      }
    } else if (copyArray[i].length === 5){
      if (parseInt(copyArray[i][0]) < parseInt(copyArray[i][2])) {
        holdingArray = holdingArray.concat(interval(parseInt(copyArray[i][0]), parseInt(copyArray[i][2]), parseInt(copyArray[i][4]), "ascending"));
      } else {
        holdingArray = holdingArray.concat(interval(parseInt(copyArray[i][2]), parseInt(copyArray[i][0]), parseInt(copyArray[i][4]), "descending"));
      }
    }
  }
  return holdingArray;
}
function sequence(start, end, direction) {
  var holdingArray = [];
  if (direction === "ascending") {
    for (var i = start; i <= end; i++) {
      holdingArray.push(i);
    }
  } else if (direction === "descending"){
    for (var i = start; i <= end; i--) {
      holdingArray.push(i);
    }
  }
  return holdingArray;
}

function interval(start, end, interval, direction) {
  var holdingArray =[];
  if (direction === "ascending") {
    for (var i = start; i < end; i+= interval) {
      holdingArray.push(i);
    }
  } else if (direction === "descending"){
    for (var i = start; i < end; i-= interval) {
      holdingArray.push(i);
    }
  }
  return holdingArray;
}

console.log(uncompress("5,5*4"));