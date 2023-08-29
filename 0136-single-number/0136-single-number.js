/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
for (var i = 0; i < nums.length; i++) {
var temp = nums[i];
  nums[i] = 'X';
  if (!nums.includes(temp)) {
    return temp;
  } else {
    nums[i] = temp;
  }
}
  
 
};