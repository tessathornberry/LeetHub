/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var result = false;
  var array = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      array.push(1);
    } else if (s[i] === '(') {
      array.push(2);
    } else if (s[i] === '{') {
      array.push(3);
    } else if (s[i] === ']') {
      array.push(-1);
    } else if (s[i] === ')') {
      array.push(-2);
    } else if (s[i] === '}') {
      array.push(-3);
    }
  }
    for (var j = 0; j < array.length; j++) {
    if (array[j] < 0) {
      if (array[j] + array[j - 1] === 0) {
        array.splice(j - 1, 2);
        j = j - 2;
      }
    }
  }

  if (array.length  === 0) {
    result = true;
  }
  return result;
};