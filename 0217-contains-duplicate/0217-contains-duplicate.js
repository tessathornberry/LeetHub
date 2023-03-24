/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let pairStorage = {};

  for (var i = 0; i < nums.length; i++) {
    if (pairStorage[nums[i]]) {
      return true;
    } else {
      pairStorage[nums[i]] = 1;
    }
  }
  return false;
};