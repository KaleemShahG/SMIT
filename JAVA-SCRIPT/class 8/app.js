// CHAPTER : 31
// DATE:

var firstRamadan = new Date("March 23, 2026");
var today = new Date();
var firstRamadanGetTime = firstRamadan.getTime();
var todayGetTime = today.getTime();
var finalvalue = firstRamadanGetTime - todayGetTime;
var lastAnswer = Math.ceil(finalvalue / (1000 * 60 * 60 * 24));

console.log("Days remaining until the first day of Ramadan 2026: " + lastAnswer);






