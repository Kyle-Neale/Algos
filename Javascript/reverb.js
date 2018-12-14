/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
	var vowels = 'aeiou'
	var newWord = word;
	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (vowels.includes(char)) {
			newWord = word.slice(0) + word.slice(i)
		}
	}
	return newWord;
}
