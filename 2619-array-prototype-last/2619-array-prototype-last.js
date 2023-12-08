/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  let result = this.pop();
  if (JSON.stringify(result)) {
    return result;
  } else {
     return -1;
  }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */