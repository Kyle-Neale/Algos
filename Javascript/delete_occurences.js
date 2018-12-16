/**********************************************************************************
Given a list lst and a number N, create a new list that contains each number
of lst at most N times without reordering. For example if N = 2, and the input
is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this
would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to
[1,2,3,1,2,3].

Example
  deleteNth ([1,1,1,1],2) // return [1,1]
  deleteNth ([20,37,20,21],1) // return [20,37,21]
************************************************************************************/

function deleteNth(arr,n){
  // I want to push each element into a new array N times.

  // Initialize a new array to store final result and a new object to keep track of
  // how many times an element occurs
  let eleTracker = {};
  let newArr = [];

  arr.forEach(ele => {
  // Check to see whether or not element exists in object. If not, initialize counter to 1.
  // Push element into new array

    if (eleTracker[ele] === undefined) {
      eleTracker[ele] = 1
      newArr.push(ele)
  // If it already exists, check how many times it has been seen.
  // If it is less than N we push into new array and increase counter in our tracker.

    } else if (eleTracker[ele] < n){
      eleTracker[ele] += 1;
      newArr.push(ele);
    }
  })
  return newArr;
}

// Refactored Code!!
function deleteNth(arr,n){
  let eleTracker = {};
  return arr.filter(element => {
    eleTracker[element] = (eleTracker[element] || 0) + 1;
    return eleTracker[element] <= n;
  })
}
