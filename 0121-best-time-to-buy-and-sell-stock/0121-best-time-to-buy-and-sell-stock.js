/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var biggestProfit = 0;
  if (prices.length === 0) {
     return biggestProfit;
  }

  var lowestValue = prices[0];
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < lowestValue) {
      lowestValue = prices[i];
    }
    if (prices[i] > lowestValue) {
      var checkValue = prices[i] - lowestValue;
      if (checkValue > biggestProfit) {
        biggestProfit = prices[i] - lowestValue
      }
    }
  }
  return biggestProfit;
};