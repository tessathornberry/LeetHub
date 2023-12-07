/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let resultObject = {};
  this.forEach((element) => {
    if (!resultObject[fn(element)]) {
      resultObject[fn(element)] = [element];
    } else {
      resultObject[fn(element)].push(element);
    }
  })
  return resultObject;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */