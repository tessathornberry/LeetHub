/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let splitHaystack = haystack.split(needle);
  if (splitHaystack == haystack) {
    return -1
  } else {
    console.log(splitHaystack)
    if (splitHaystack[0] === '') {
      return 0;
    } else {
       return splitHaystack[0].length;
    }
   
  }
};