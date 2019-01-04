/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

We want to turn sentence into its multiple words so we can go through them indiviually.
Once we have a word, we can check if it contains any vowels and remove the last vowel.
We want to store that word in a new place.

Examples:
hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/

function hipsterfy(sentence) {
  var newWords = [];
  var words = sentence.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = hipsterfyWord(word);
    newWords.push(newWord);
  }
  return newWords.join(' ');
}

// Helper function
function hipsterfyWord(word) {
  var newWord = '';
  var vowels = 'aeiou';
  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (vowels.indexOf(char) !== -1)
    newWord = word.slice(0, i) + word.slice(i + 1);
  }
  return newWord;
}
