/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if (s.length === 0) {
      return t;
    }
  var splitS = s.split('');
  for (var i = 0; i < t.length; i++) {
  if (!splitS.includes(t[i])) {
      return t[i];
  } else {
    splitS.splice(splitS.indexOf(t[i]), 1, 0);
  }
}
};