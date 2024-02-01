/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let container = {};
    let majVal = nums[0];
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!container[nums[i]]) {
            container[nums[i]] = 1;
        } else {
            container[nums[i]]++;
            if (container[nums[i]] > maxCount) {
                maxCount = container[nums[i]];
                majVal = nums[i];
            }
        }
    }
    return majVal;
};