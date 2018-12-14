/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/

function lastVowelIndex(word) {
	var vowels = 'aeiou';
	for (var i = word.length - 1; i >= 0; i--) {
		var char = word[i];
		var vowelIndex = vowels.indexOf(char)
		if (vowelIndex !== -1) {
		  	return i;
		}
	}
}

function reverseHipsterfyWord(word) {
	var newString = '';
	var vowels = 'aeiou';
	for (var i = 0; i < word.length; i++) {
		var letter = word[i];
		if (!vowels.includes(letter) || (i === lastVowelIndex(word))) {
			newString += letter
		}
	}
	return newString;
}


function reverseHipsterfy(sentence) {
	var words = sentence.split(' ');
	var arrWords = [];
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		arrWords.push(reverseHipsterfyWord(word))
	}
	return arrWords.join(' ');
}
