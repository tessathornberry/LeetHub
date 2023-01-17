/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var isPalindrome = false;

  var newString = '';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

  if (s.length === 0) {
    return true;
  }

  for (var i = 0; i < s.length; i++) {
    if (alphabet.includes(s[i].toLowerCase())) {
      newString += s[i].toLowerCase();
    }
  }

  if (newString.length === 0 || newString.length === 1) {
    return true;
  }
  var array = newString.split('');

  var first = array.slice().join('');
  var second = array.slice().reverse().join('');

  if (first === second) {
    isPalindrome = true;
  }

  return isPalindrome;
};