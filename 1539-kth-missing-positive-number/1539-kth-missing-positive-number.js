/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
  let result;
  let count = 0;
  let currentValue = 1;
  let lastNumber = arr[arr.length - 1];

  let traversalLength = lastNumber + k;
  let missingValuesArray = [];

  for (var i = 0; i < traversalLength; i++) {
    if (!arr.includes(currentValue)) {
      count++;
      if (count === k) {
        result = currentValue;
        break;
      }
    }
    currentValue++;
  }

  return result;
};