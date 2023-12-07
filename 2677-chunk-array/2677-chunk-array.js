/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let resultArray = [];
  while (arr.length > 0) {
    resultArray.push(arr.slice(0,size));
    arr.splice(0,size);
    
  }
  console.log(resultArray)
  return resultArray;
};
