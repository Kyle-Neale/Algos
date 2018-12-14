/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

function hasAllVowels(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	for (var i = 0; i < vowels.length; i++) {
		var vowel = vowels[i];
		if (!str.includes(vowel)) {
			return false;
		}
	}
	return true;
}
