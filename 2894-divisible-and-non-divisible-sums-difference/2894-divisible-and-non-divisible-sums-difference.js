/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
  var num1 = 0;
  var num2 = 0;
  for (var i = 1; i <= n; i++) {
    if (i % m == 0) {
      num2 += i;
    } else {
      num1 += i;
    }
  }
  return num1 - num2;
};