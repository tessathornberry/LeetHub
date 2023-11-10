/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //figure out order of letters in s, and order of letters in t. subtract letters from s and if any are left return false, but what if the word is very long? indexof?
  if (s.length === 0) {
     return true;
  }
  
  if (t.length === 0 && s.length > 0) {
     return false;
  }

  s = s.split('');
  for (var i = 0; i < t.length; i++) {
    if (s[0] === t[i]) {
      s.shift();
      
      if (s.length === 0) {
         return true;
      }
    }
  }
  return false;
};