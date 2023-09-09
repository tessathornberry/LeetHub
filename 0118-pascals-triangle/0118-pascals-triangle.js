/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [[1]];

  for (var i = 0; i < numRows - 1; i++) {
    var holderArray = result[i].slice();
    holderArray = [0, ...holderArray, 0];
    
    var addedArray = [];
    while (holderArray.length > 1) {
     addedArray = [...addedArray, (Number(holderArray[0]) + Number(holderArray[1]))]
     holderArray.shift();
    }
  result = [...result, addedArray];
  }

  return result;
};