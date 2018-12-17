/****************************************************************************
Given a string, determine if it is a palindrome!

Examples:

isPalindrome('hello') //=> false
isPalindrome('abba') //=> true
isPalindrome('racecar') //=> true
*****************************************************************************/


// Using the .reverse() method.
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// Using the .reduce() method.
function isPalindrome(str) {
  return str === str.split('').reduce((reversed, character) => character + reversed, '');
}

// Using recursion.
function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}
