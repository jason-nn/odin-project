const add7 = (n) => n + 7;
const multiply = (a, b) => a * b;
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const lastLetter = (str) => str.slice(-1);

console.log(add7(10), multiply(2, 3), capitalize('jaSON'), lastLetter('jaSON'));
