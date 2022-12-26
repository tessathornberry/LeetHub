/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
   var result = false;
   var target = nums.length - 1;
   var highestIndexReached = 0;
   if (nums.length === 0) {
     return result;
   }

   if (nums.length === 1) {
     return true;
   }

   for (var i = 0; i < nums.length - 1; i++) {
      highestIndexReached = Math.max((i + nums[i]), highestIndexReached);
           if (nums[i] === 0 && highestIndexReached <= i ) {
      return result;
      break;
    }
      if (highestIndexReached >= target) {
        result = true;
        break;
      }
   }

   return result;
};