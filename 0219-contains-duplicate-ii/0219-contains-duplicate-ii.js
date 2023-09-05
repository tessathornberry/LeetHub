/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //if two difference indices are the same vallue and
  //if the absolute value between them is less than or equal to the target number k
  //if the length of the array is longer than the target number, return false
  if (nums.length <= 1) {
    return false;
  }
  

  for (var i = 0; i < nums.length - 1; i++) {
      var j = nums.indexOf(nums[i], i+1);
      if (j !== -1) {
        if (Math.abs(i - j) <= k) {
          return true;
        }
      }
  }
  return false;
};