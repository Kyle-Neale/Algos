/***********************************************************************
Write a function that accepts an integer N and returns an N by N spiral
matrix.

Examples:
sMatrix(2) // => [[1, 2],
                 [4, 3]]

sMatrix(3) // => [[1, 2, 3],
                 [8, 9, 4],
                 [7, 6, 5]]

sMatrix(4) // => [[1, 2, 3, 4],
                 [12, 13, 14, 5],
                 [11, 16, 15, 6],
                 [10, 9, 8, 7]]
***********************************************************************/

const sMatrix = (n) => {
  const mainArr = [];
  for (let count = 0; count < n; count++) {
    mainArr.push([]);
  }
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // Responsible for top row
    for (let i = startCol; i <= endCol; i++) {
      mainArr[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Responsible for right column
    for (let i = startRow; i <= endRow; i++) {
      mainArr[i][endCol] = counter;
      counter++
    }
    endCol--;
    // Responsible for bottom row
    for (i = endCol; i >= startCol; i--) {
      mainArr[endRow][i]= counter;
      counter++;
    }
    endRow--;
    // Responsible for left column
    for (let i = endRow; i >= startRow; i--) {
      mainArr[i][startCol] = counter;
      counter++
    }
    startCol++
  }
  return mainArr;
}
