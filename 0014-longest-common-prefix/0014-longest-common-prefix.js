/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs = strs.sort();
  let str1 = strs[0];
  let str2 = strs[strs.length-1];
  let index = 0;
  while (index < str1.length && index < str2.length) {
    if (str1[index] === str2[index]) {
      index++;
    } else {
      break;
    }
  }
  return str1.slice(0, index);
}