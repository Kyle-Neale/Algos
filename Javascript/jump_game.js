/*******************************************************************************
Given an array of non-negative integers, you are initially positioned at the
first index of the array. Each element in the array represents your maximum
jump length at that position. Determine if you are able to reach the last index.

Examples:
  canJump([2, 3, 1, 1, 4]) // => true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


  canJump([3, 2, 1, 0, 4]) // => false
  Explanation: You will always arrive at index 3 no matter what. Its maximum
           jump length is 0, which makes it impossible to reach the last index.

*******************************************************************************/

function canJump(nums) {
    if (nums.length === 1) {
        return true;
    }

    let maxReachableIndex = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        if (maxReachableIndex < i) {
            return false;
        }
        maxReachableIndex = Math.max(maxReachableIndex, i + nums[i]);
    }
    return true;
}
