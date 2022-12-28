/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var result = false;
  var array = s.split('');

  var recurseArray = (array) => {
    if (array.length  === 0) {
      result = true;
    }

    for (var j = 0; j < array.length; j++) {
      if (array[j] === ')') {
        if (array[j - 1] === '(') {
          array.splice(j - 1, 2)
        recurseArray(array)
        }
      }
      if (array[j] === ']') {
        if (array[j - 1] === '[') {
          array.splice(j - 1, 2)
        recurseArray(array)
        }
      }
      if (array[j] === '}') {
        if (array[j - 1] === '{') {
          array.splice(j - 1, 2)
        recurseArray(array)
        }
      }
  }
  }
  recurseArray(array);

  return result;
};