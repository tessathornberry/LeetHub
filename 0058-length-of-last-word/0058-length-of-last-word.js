/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitString = s.split(" ");
while (splitString.length > 0) {
  if (splitString[splitString.length - 1].length > 0) {
   return splitString[splitString.length - 1].length; 
    break;
  } else {
    splitString.pop();
  }

}

};