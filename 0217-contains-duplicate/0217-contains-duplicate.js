/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var charming = new Set(nums);
  
  if (charming.size < nums.length) {
    return true;
  }
  
  return false;
};