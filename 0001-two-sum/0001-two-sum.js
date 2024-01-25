/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  for (var i = 0; i < nums.length - 1; i++) {
    var counter = i + 1;
    while (counter <= nums.length) {
      if (nums[i] + nums[counter] === target) {
        return [i, counter];
      } else {
        counter++;
      }
    }
  }
};