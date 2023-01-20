/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var string1 = t.split('').sort().join('');
    var string2 = s.split('').sort().join('');
    if (string1 === string2) {
         return true;
    } else {
return false;}
    
};