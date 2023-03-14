/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let resultArray = [];
    
    for (var i = 0; i < nums.length; i++) {
        resultArray.push(nums[nums[i]]);
    }
    
    return resultArray;
};