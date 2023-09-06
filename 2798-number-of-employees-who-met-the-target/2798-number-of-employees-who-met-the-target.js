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
  var counter = 0;
  function compareNumbers(a, b) {
    return a - b;
  }

  hours.sort(compareNumbers);
  console.log(hours)
  var index = 0;
while (hours[index] < target && index <= hours.length) {
  index++;
}
  console.log('index', index, hours.length)
  if (index < hours.length) {
    counter = hours.slice(index).length;
  }
  return counter;
};