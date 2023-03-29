/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
     return false;
  }
  
  let numberString = x.toString();
  if (numberString === numberString.split('').reverse().join('')) {
return true;
  } else {
    return false;
  }
    
};