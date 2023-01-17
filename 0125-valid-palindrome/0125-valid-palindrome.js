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
  var firstIndex = Math.ceil(newString.length / 2);
  var first = array.slice(0, firstIndex);
  var second = array.slice(firstIndex, array.length).reverse();

  for (var j = 0; j < first.length; j++) {
    if (first[j] && !second[j]) {
      return isPalindrome;
    }
    if (first[j] === second[j]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      return isPalindrome;
    }
  }

  if (first.length === 1 || first.length === 0) {
    isPalindrome = true;
  }
  //edge cases, empty string, either no letters, or empty
  //first, string conversion
  //then, check if palindrome
  //can make a reversed array of half the letters, depending on
  return isPalindrome;
};