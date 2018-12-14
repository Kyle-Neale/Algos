/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.

Examples:

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

pairsToString(array1); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

pairsToString(array2); // => 'food!'
***********************************************************************/

function pairsToString(arr) {
	var newString = ''
	for (var i = 0; i < arr.length; i++) {
		var subArray= arr[i];
		for (var j = 0; j < subArray[1]; j++) {
			newString += subArray[0];
		}
	}
	return newString;
}
