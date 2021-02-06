//Returns whether a number is odd, then prints msg + true/false to the console.
const isOdd = function (num) {
  let msg = `The number ${num} is odd: `
  return msg + (num % 2 !== 0);
} 
console.log(isOdd(6));