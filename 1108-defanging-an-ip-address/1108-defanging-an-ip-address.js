/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let defangedIP = "";
    
  for (var i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      defangedIP += '[.]';
    } else {
      defangedIP += address[i];
    }
  }
  return defangedIP;    
};