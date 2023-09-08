/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums = nums.sort();

    if (nums.length % 2 === 0) {
        return nums[nums.length/2];
    } else {
        return nums[(Math.round(nums.length/2 -1))];
      
    }
};