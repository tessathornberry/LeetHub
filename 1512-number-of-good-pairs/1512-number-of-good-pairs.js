/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let pairs = [];
  for (let i = 0; i < nums.length - 1; i++) {
  for (let j = 1; j < nums.length;j++) {
    if ( i < j && nums[i] == nums[j]) {
      pairs = [...pairs, [i, j]]
    }
  }
}
  return pairs.length;
};