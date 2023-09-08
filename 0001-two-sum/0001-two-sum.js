/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var resultArray= [];
  var firstIndex = 0;
  
  while (firstIndex < nums.length && resultArray.length === 0) {
    for (var i = firstIndex + 1; i < nums.length; i++) {
      if (nums[firstIndex] + nums[i] === target) {
        resultArray = [...resultArray, firstIndex, i];
      }
    }
    firstIndex++;
  }
  return resultArray;
};