/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let resultTemps = [];
    
    resultTemps.push(celsius + 273.15);
    resultTemps.push((celsius * 1.8) + 32);
    
    
    return resultTemps;
};