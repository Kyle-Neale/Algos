/********************************************************************
Write a function that accepts a postive number, N. The funciton
should print a step shape with N levels using the '#' charcter. Make
sure the step has appropriate spaces on the right hand side!

Example:
  nSteps(2) // => '# '
                  '##'
  nSteps(3) // => '#  '
                  '## '
                  '###'
  nSteps(4) // => '#   '
                  '##  '
                  '### '
                  '####'
*********************************************************************/


function nSteps(n) {
  for(let row = 0; row < n; row++) {
    let stair = '';
    for(let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

// Recursive Solution
function nSteps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return nSteps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  nSteps(n, row, stair);
}
