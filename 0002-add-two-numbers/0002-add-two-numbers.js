/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var tensSum = 0;

  var recurseSum = (l1, l2) => {

    var resultList = {};
    var value1, value2, sum, next1, next2;
    if (l1.val || l1.val === 0 || l2.val || l2.val === 0) {
      !l1.val ? value1 = 0 : value1 = l1.val;
      !l2.val ? value2 = 0 : value2 = l2.val;
    }

    sum = value1 + value2 + tensSum;
    tensSum = 0;

    console.log('sum', sum)
    if (sum >= 10) {
      tensSum = 1;
      sum -= 10;
    }

    resultList.val = sum;
    if (l1.next || l2.next) {
      !l1.next ? l1.next = {val: 0} : null;
      !l2.next ? l2.next = {val: 0} : null;
      resultList.next = recurseSum(l1.next, l2.next);
    } else if (tensSum === 1) {
      resultList.next = {val: 1, next: null}
    } else {
      resultList.next = null;
    }
    return resultList;
  }
  return recurseSum(l1, l2);
};