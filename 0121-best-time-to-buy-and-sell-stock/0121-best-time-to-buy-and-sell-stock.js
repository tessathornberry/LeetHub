/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var biggestDifference = 0;
    var left = 0;
    for (let i = 1; i < prices.length;i++) {
        while (prices[i] < prices[left]) {
            left = i;
            i++;
        }
        if ((prices[i] - prices[left]) > biggestDifference) {
            biggestDifference = prices[i] - prices[left];
        }
    }
    
    
    return biggestDifference;
};