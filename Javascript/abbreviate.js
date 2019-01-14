/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

function abbreviate(sentence) {
	var words = sentence.split(' ');
	var newWords = [];
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		if (word.length > 5) {
			newWords.push(removeVowels(word));
		} else {
			newWords.push(word);
		}
	}
	return newWords.join(' ');
}

function removeVowels(word) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var newWord = '';
	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (vowels.indexOf(char) === -1) {
			newWord += char;
		}
	}
	return newWord;
}
