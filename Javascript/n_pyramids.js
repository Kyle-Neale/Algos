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
    let stair = '';
    for (var rCol = 0; rCol < n; rCol++) {
      if (rCol <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    for (var lCol = 1; lCol < n; lCol++) {
      if (lCol <= row) {
        stair = '#' + stair;
      } else {
        stair = ' ' + stair;
      }
    }
    console.log(stair);
  }
}
