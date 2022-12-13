/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var resultArray= [];
  var firstIndex = 0;
  //I want the first item to be added to each of the following items
  //if they pair up to the target, then
  // push the indices into the result array
  //return the result array
  //if they do not add up, move over one and compare those
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