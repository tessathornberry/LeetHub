/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    //sum the amounts per customer?
  //return biggest sum
  let biggestWealth = 0;
  
  for (let i = 0; i < accounts.length; i++) {
    let summedAccounts = accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue)
    if (summedAccounts > biggestWealth) {
      biggestWealth = summedAccounts;
    }
  }
  return biggestWealth;
};