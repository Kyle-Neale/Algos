/****************************************************************

Given an array and a chunk size, divide the array into many
subarrays where each subarray is of length size equal to the
chunk value.

Examples:
chunk([1, 2, 3, 4], 2) // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) // => [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7], 3) // => [[1, 2, 3], [4, 5, 6], [7]]

******************************************************************/

// First attempt
function chunk(arr, size) {
  let chunkArr = [];
  for(let i = 0; i < arr.length; i += size) {
    let chunkEles = arr.slice(i, i + size);
    chunkArr.push(chunkEles);
  }
  return chunkArr;
}

// Alternate solution
function  chunk(arr, size) {
  let chunkArr = [];
  for (let element of arr) {
    const last = chunkArr[chunkArr.length - 1];
    if (!last || last.length === size) {
      chunkArr.push([element]);
    } else {
      last.push(element)
    }
  }
  return chunkArr;
}
