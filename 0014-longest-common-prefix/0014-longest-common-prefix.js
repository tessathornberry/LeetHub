/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var prefix = '';
  var shortestString = strs[0];
  var strsCount = strs.length;
  
  for (var i = 1; i < strsCount; i++) {
    if (strs[i].length < shortestString.length) {
      shortestString = strs[i];
    } 
  }
    var wordsCount = 0;
  while (shortestString.length > 0 && prefix.length <= 0) {
  for (var j = 0; j < strsCount; j++) {
    console.log(strs[j].slice(0, shortestString.length),shortestString)
    if (strs[j].slice(0, shortestString.length) === shortestString) {
      wordsCount++;
      console.log(wordsCount)
      if (wordsCount === strsCount) {
        prefix = shortestString;
        return prefix;
      } 
    } else {
      shortestString = shortestString.slice(0, -1);
      j = 0;
      wordsCount = 0;
      continue;
    }
  }
  }
  return prefix;
};