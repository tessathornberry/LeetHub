/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var splitNote = ransomNote.split('');
  var splitMagazine = magazine.split('');
  var allLettersIncluded = true;
  for (var i=0; i < splitNote.length; i++) {
    if (splitMagazine.includes(splitNote[i])) {
      var indexOfLetter = splitMagazine.indexOf(splitNote[i]);
      splitMagazine.splice(indexOfLetter, 1, '0');
    } else {
      allLettersIncluded = false;
      break;
    }
  }
  return allLettersIncluded;
};