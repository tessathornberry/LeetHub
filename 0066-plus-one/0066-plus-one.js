/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  
  const nineFunction = (integer) => {
    digits[integer] = 0;
    if (integer === 0) {
      digits.unshift(1);
      return;
    } 
    
    if (digits[integer - 1] === 9) {
      nineFunction(integer - 1);
    } else {
      digits[integer - 1]++;
    }
  }
  
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      nineFunction(i);
      return digits;
    } else {      
      digits[digits.length - 1]++;
      return digits;
    }
  }


};