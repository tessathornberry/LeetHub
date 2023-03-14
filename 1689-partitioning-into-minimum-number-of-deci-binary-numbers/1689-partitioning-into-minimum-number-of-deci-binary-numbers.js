/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let splitNumber = n.split('');
    let maxNum = 0;
    for (var i = 0; i < splitNumber.length; i++) {
        // if (Number(splitNumber[i]) === 9) {
        //     maxNum = 9;
        //     break;
        // } //does not actually make it faster
        if (Number(splitNumber[i]) > maxNum) {
            maxNum = splitNumber[i];
            }
    }
    return maxNum;
};