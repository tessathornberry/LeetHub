/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  function compareNumbers(a, b) {
    return a[0] - b[0];
  }
  intervals.push(newInterval);
  intervals.sort(compareNumbers);
  if (intervals.length === 1) {
    return intervals;
  }
  
  for (var i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > intervals[i-1][1]) {
      continue;
    } 
    if (intervals[i][0] <= intervals[i-1][1]) {
      intervals[i-1][0] = Math.min(intervals[i][0], intervals[i-1][0]);
      intervals[i-1][1] = Math.max(intervals[i][1], intervals[i-1][1]);
      intervals.splice(i, 1);
      i = 0;
    }
  }
  
  return intervals;
 
  
  return intervals;
};