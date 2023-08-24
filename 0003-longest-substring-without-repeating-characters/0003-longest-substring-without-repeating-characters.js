/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var maxLength = 0;
  var substringHolder = "";
  var maxSubstring = "";

  for (var i = 0; i < s.length; i++) {
    if (!substringHolder.includes(s[i])) {
      substringHolder = substringHolder + s[i];
    } else {
      if (substringHolder.length > maxLength) {
      maxLength = substringHolder.length;
      maxSubstring = substringHolder.slice();
      }
      while (substringHolder.includes(s[i])) {
        substringHolder = substringHolder.slice(1);
      }
    substringHolder = substringHolder + s[i];
    }
  }
  if (substringHolder.length > maxLength) {
      maxLength = substringHolder.length;
      maxSubstring = substringHolder.slice();
      }
    return maxSubstring.length;
};