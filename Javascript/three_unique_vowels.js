/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/
function uniqueVowelCount(string) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var counter = 0;
	for (var i = 0; i < vowels.length; i++) {
		var vowel = vowels[i];
		if (string.includes(vowel)) {
			counter += 1
		}
	}
	return counter;
}

function threeUniqueVowels(string) {
	if (uniqueVowelCount(string) >= 3) {
		return true;
	} else {
		return false;
	}
}
