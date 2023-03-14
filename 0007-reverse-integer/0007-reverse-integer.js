/**
 * @param {number} x
 * @return {number}

 A 32-bit signed integer has a minimum value of -2,147,483,648 and a maximum value of 2,147,483,647 (inclusive).*/
var reverse = function(x) {
  let reversed = '';
  if (x < 0) {
    reversed += '-';
  }
  let numString = x.toString();
  
  for (var i = numString.length - 1; i >= 0; i--) {
    reversed += numString[i];
  }
  
  reversed = Number.parseInt(reversed);
  console.log('reversed', reversed);
  if (reversed > 2147483647 || reversed < -2147483648) {
     return 0;
  } else {
    return reversed;
  }
    
};