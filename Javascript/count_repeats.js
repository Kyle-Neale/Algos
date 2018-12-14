/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/

function countRepeats(string) {
	var counter = 0;
	var charCount = letterCount(string);
	for (var char in charCount) {
	  if (charCount[char] > 1) {
	    counter += 1;
	  }
	}
	return counter;
}

function letterCount(string) {
	var count = {};
	for (var i = 0; i < string.length; i++) {
		var char = string[i];
		if (count[char] === undefined) {
			count[char] = 1;
		} else {
			count[char] += 1;
		}
	}
	return count;
}
