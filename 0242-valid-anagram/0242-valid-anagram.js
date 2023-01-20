/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
//     var string1 = t.split('').sort().join('');
//     var string2 = s.split('').sort().join('');
//     if (string1 === string2) {
//          return true;
//     } else {
// return false;}
    
    var object1 = {};
    var object2 = {};
    for (var i = 0; i < s.length; i++) {
        if (!object1[s[i]]) {
             object1[s[i]] = 1;
        } else {
            object1[s[i]]++;
        }
               if (!object2[t[i]]) {
             object2[t[i]] = 1;
        } else {
            object2[t[i]]++;
        }
    }
    var anagram = true;
  for (var key in object1) {
      if (object1[key] !== object2[key]) {
          anagram = false;
      }
  }
    return anagram;
};