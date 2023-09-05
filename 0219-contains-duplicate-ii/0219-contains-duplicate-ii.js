/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (nums.length <= 1) {
    return false;
  }
  
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums.indexOf(nums[i], i + 1) !== -1) {
      var j = nums.indexOf(nums[i], i + 1);
        if (Math.abs(i - j) <= k) {
          return true;
        }
    }
  }
  return false;
};