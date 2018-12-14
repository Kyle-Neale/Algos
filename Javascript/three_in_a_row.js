/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.


Examples:
threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

function threeInARow(arr) {
	for (var i = 0; i < arr.length; i++) {
		var ele = arr[i]
		var beforeEle = arr[i - 1];
		var afterEle = arr[i + 1];
		if (beforeEle === ele && ele === afterEle) {
			return true;
		}
	}
	return false;
}
