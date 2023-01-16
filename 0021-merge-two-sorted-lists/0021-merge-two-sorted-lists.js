/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  var completeList = {};
  if (!list1) {
    if (list1 === null) {
      completeList = list2;
      return completeList;
    }
  } else if (!list2) {

    if (list2 === null) {
    completeList = list1;
    return completeList;
    }
  }

  if (list1.val || list2.val || list1.val === 0 || list2.val === 0) {
      
    if (list1.val <= list2.val) {
      completeList.val = list1.val;
      if (list1.next) {
      completeList.next = mergeTwoLists(list1.next, list2);
      } else {
        completeList.next = list2;
      }
    } else {
      completeList.val = list2.val;
      if (list2.next) {
        completeList.next = mergeTwoLists(list1, list2.next);
        } else {
          completeList.next = list1;
        }
    }
  }

  return completeList;
};