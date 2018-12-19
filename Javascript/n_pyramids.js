/********************************************************************
Write a function that accepts a postive number, N. The funciton
should print a pyramid shape with N levels using the '#' charcter. Make
sure the step has appropriate spaces on the right and left hand sides!

Example:
  nSteps(2) // => ' # '
                  '###'
  nSteps(3) // => '  #  '
                  ' ### '
                  '#####'
  nSteps(4) // => '   #   '
                  '  ###  '
                  ' ##### '
                  '#######'
*********************************************************************/

function nPyramid(n) {
  for (var row = 0; row < n; row++) {
    let level = '';
    for (var rCol = 0; rCol < n; rCol++) {
      if (rCol <= row) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    for (var lCol = 1; lCol < n; lCol++) {
      if (lCol <= row) {
        level = '#' + level;
      } else {
        level = ' ' + level;
      }
    }
    console.log(level);
  }
}

// Alternate Solution
function nPyramid(n) {
  let midpoint = Math.floor((2 * n - 1)/ 2);
  for (var row = 0; row < n; row++) {
    let level = '';
    for (var column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}


//Recursive Solution
function nPyramid(n) {

}
