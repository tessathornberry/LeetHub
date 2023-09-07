/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
  let count = '0';
  let splitNumber;
  for (var i = 0; i < number.length; i++) {
    if (number.slice(i).includes(digit)) {
      if (number[i] === digit) {
        splitNumber = number.split('');
        splitNumber.splice(i, 1);
        var thisCount = splitNumber.join('');
        if (BigInt(thisCount) > BigInt(count)) {
          count = thisCount;
        }
        splitNumber = number.split('');
      } else {
        continue;
      }
    }
  }
  return count;
};