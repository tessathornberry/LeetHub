/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let counter = 0;
    for (var i = 0; i < stones.length; i++) {
      if (jewels.includes(stones[i])) {
        counter++;
      }
    }
      return counter;
};