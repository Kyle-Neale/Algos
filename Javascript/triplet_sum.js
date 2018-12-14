/***********************************************************************
Write a function `tripletSum(array, sum)` that takes in an array of
numbers (array) and a number (sum). The function should return an array
containing unique triplets of numbers from the array that equal `sum`
when added together. You can assume that the input array contains no
repeated numbers.

Example:

var arr1 = [1, 3, 5, 2, 4];
tripletSum(arr1, 8); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]
tripletSum(arr1, 10); // => [ [ 1, 5, 4 ], [ 3, 5, 2 ] ]
tripletSum(arr1, 11); // => [ [ 5, 2, 4 ] ]
***********************************************************************/

function tripletSum(array, sum) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		for (var j = i + 1; j < array.length; j++) {
			for (var k = j + 1; k < array.length; k++) {
				var num1 = array[i];
				var num2 = array[j];
				var num3 = array[k];

				if ((num1 + num2 + num3) === sum) {
					newArr.push([num1, num2, num3]);
				}
			}
		}
	}
	return newArr;
}
