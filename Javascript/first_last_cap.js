/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
	var words = sentence.split(' ');
	var newWord = '';
	var newWords = [];
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		var firstLetter = word[0].toUpperCase();
		var lastLetter = word[word.length - 1].toUpperCase();
		var midLetters = word.slice(1, word.length - 1).toLowerCase();
		newWord = firstLetter + midLetters + lastLetter;
		newWords.push(newWord);
	}
	return newWords.join(' ');
}
