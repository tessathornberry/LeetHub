/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let initialValue = n;
    let firstCall = true;
    return function() {
      if (firstCall) {
        firstCall = false;
        return n;
      }
      n += 1;
      return n;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */