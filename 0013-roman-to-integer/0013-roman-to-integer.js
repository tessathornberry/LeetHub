/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0;
    var numbersObj = {
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000
      }
    for (var i = s.length - 1; i >= 0; i--) {
      if (numbersObj[s[i]] > numbersObj[s[i - 1]]) {
        result += (numbersObj[s[i]] - numbersObj[s[i - 1]]);
        i--;
      } else {
        result += numbersObj[s[i]];
      }
    }

    return result;
};