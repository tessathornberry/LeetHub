/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var numsSet = new Set(nums);
    if (numsSet.size < nums.length) {
        return true;
    }

    return false;
    
};