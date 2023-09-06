/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  if (hours.length === 1) {
    if (hours[0] >= target) {
      return 1;
    }
  }
  function compareNumbers(a, b) {
    return a - b;
  }
  hours.sort(compareNumbers);
  var index = 0;
  while (hours[index] < target && index <= hours.length) {
    index++;
  }
  if (index < hours.length) {
    return hours.slice(index).length;
  } else {
    return 0;
  }

};