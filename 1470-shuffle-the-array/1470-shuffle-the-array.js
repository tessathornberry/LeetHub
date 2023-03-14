/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    let shuffledArray = [];
  
  for (var i = 0; i < nums.length - n; i++) {
    shuffledArray.push(nums[i]);
    shuffledArray.push(nums[i + n]);
  }
    
    
    return shuffledArray;
    
};