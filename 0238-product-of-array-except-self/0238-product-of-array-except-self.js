/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  if (nums.length === 2) {
    return [nums[1], nums[0]];
  }
  var results = [];
  var alreadyExcluded = {};
  var product = 1;
  var holder = 1;
  
  function findProduct(array) {
    while (array.length > 0) {
      product *= array[0];
      array.shift();
    }
    results.push(product);
  }
  
  for (var i = 0; i < nums.length; i++) { 
    if (alreadyExcluded[nums[i]] !== undefined) {
      results.push(alreadyExcluded[nums[i]]);
      continue;
    }
    holder = nums[i];
    nums[i] = 1;
    findProduct(nums.slice());
    nums[i] = holder;
    alreadyExcluded[nums[i]] = product;
    product = 1;
  }

  return results;
    
};