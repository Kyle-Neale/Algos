/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/
function vowelShift(sentence) {
	var newSentence = '';
	var vowels = ['a', 'e', 'i', 'o', 'u'];

	for (var i = 0; i < sentence.length; i++) {
		var char = sentence[i];
		var idx = vowels.indexOf(char);

		if (idx > -1) {
		   var nextVowel = vowels[(idx + 1) % vowels.length];
		   newSentence += nextVowel;
		} else {
			newSentence += char;
		}
	}
	return newSentence;
}
