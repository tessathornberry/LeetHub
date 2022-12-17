/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var result = '';
  var numbersObj = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
    }
  var objectValues = Object.values(numbersObj);
  var objectKeys = Object.keys(numbersObj);
  for (var i = objectValues.length; i >= 0; i--) {
    if (num / objectValues[i] > 0) {

      if (Math.floor(num / objectValues[i - 1]) === 9 && (Math.floor(num / objectValues[i]) !== 4)) {
        result += objectKeys[i - 1];
        result += objectKeys[i + 1];
        num -= (9 * objectValues[i - 1]);
      } else { //it will be 1 - 8
        var count = Math.floor(num / objectValues[i]);
        if (count === 4) {
          result += objectKeys[i];
          result += objectKeys[i + 1];
          num -= (4 * objectValues[i]);
        } else {
          while (count > 0) {
            result += objectKeys[i];
            num -= objectValues[i];
            count--;
          }
        }
      }
    }
  }
  return result;
};