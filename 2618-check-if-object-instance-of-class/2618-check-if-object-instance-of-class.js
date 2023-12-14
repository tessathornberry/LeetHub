/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  return obj !== null && obj !== undefined && typeof classFunction === 'function' && Object(obj) instanceof classFunction
 // if (obj instanceof classFunction) {
 //   return true;
 // } else {
 //   console.log(obj.constructor, classFunction)
 //   return (obj.constructor === classFunction);
 // }

};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */