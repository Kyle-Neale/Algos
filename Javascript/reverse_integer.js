/************************************************************
Given an integer, return an integer that is the reverse
ordering of numbers.
 Examples
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51

  reverseInt(-90) === -9
***********************************************************/


function reverseInt(num) {
  let reverseNum;
  let splitNum = num.toString().split('');
  if (Math.sign(num) > 0 ) {
    reverseNum = parseInt(splitNum.reverse().join(''));
    return reverseNum;
  } else {
    splitNum.shift();
    reverseNum = parseInt( '-' + splitNum.reverse().join(''))
    return reverseNum;
  }
}

// Refactored code

function reverseInt(num) {
  return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
}
