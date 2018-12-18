/********************************************************************
An anagram is the result of rearranging the letters of a word to
produce a new word.

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are
anagrams of theeach other; return false otherwise.
*********************************************************************/

// Solution using JS array helpers
function anagram(stringA, stringB) {
  let lowerStrA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort();
  let lowerStrB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort();

  if (lowerStrA.join('') === lowerStrB.join('')) {
    return true;
  } else {
    return false;
  }
}

// Solution using a character map

function anagram(stringA, stringB) {
  let aCharMap = anagramMap(stringA);
  let bCharMap = anagramMap(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (var element in aCharMap) {
    if (aCharMap[element] !== bCharMap[element]) {
      return false;
    }
  }
  return true;
}
// Anagram helper method
function anagramMap(string) {
  const charMap = {};
  for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = (charMap[char] || 0) + 1
  }
  return charMap;
}
