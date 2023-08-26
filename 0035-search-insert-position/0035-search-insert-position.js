/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  for (var i = 0; i < nums.length; i++) {
    if (target < nums[i]) {
      return (i === 0) ? 0 : (i);
    } else if (target === nums[i]) {
      return i;
    } else if (target > nums[i] && i < nums.length - 1) {
       continue;
    } else {
      return nums.length;      
    }

  }
};