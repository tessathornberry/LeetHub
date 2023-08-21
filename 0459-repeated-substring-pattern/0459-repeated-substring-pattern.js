/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

  let stringCopy = s.slice();
  let stringCopyHalf = s.slice(0, (s.length / 2));
  
  while (stringCopyHalf.length >= 1) {

    stringCopy = stringCopy.split(stringCopyHalf);
    stringCopy = stringCopy.join('');
    if (stringCopy.length === 0) {
      return true;
    } else {
      stringCopy = s.slice();
      stringCopyHalf = stringCopyHalf.slice(0, -1);
    }
  }
  return false;
};