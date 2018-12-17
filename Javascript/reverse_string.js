/************************************************************

Write a function that takes a string as input and returns the string reversed.

Example 1:
  Input: "hello"
  Output: "olleh"

Example 2:
  Input: "A man, a plan, a canal: Panama"
  Output: "amanaP :lanac a ,nalp a ,nam A"

*************************************************************/

// Using the .reverse method.
function reverse(str) {
  return str.split('').reverse().join('');
}

// Without using .reverse() method.
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    console.log(character, reversed);
    reversed = character + reversed;
  }
  return reversed;
}

// Using  the .reduce() array helper method
function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}
