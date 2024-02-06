/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let resultArray = [];
    //input array of numbers, output array of squares
    //sorted in increasing number
    //so, two steps, kind of a square it and then a bubble sort?
  function compareNumbers(a, b) {
    return a - b;
  }
    
    for (let i = 0; i < nums.length; i++) {
      resultArray[i] = nums[i]* nums[i];
    }

    return resultArray.sort(compareNumbers);
};