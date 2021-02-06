// Program provides the sum of the amounts in the array using a loop.

// Using a normal for loop
let total = 0;
const amounts = [47.89, 23.99, 3.45, 48.00];
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log(`Your order total from this for loop is ${total}`);

// Using a for..of loop instead
// Note this for..of configuration prevents the loop from being reversed.
// It only runs from start to finish. 
let orderTotal = 0;
let amountOfEachItem = [32.99, 20.99, 36.25, 44.00];
for (let itemAmounts of amountOfEachItem) { 
  orderTotal += itemAmounts;
}
console.log(`Your order total from this for..of loop is ${orderTotal}`);

// Testing another for..of loop
let totalValue = 0;
let numbers = [1, 2, 3, 4, 5, 6, 7];
for (let eachNumber of numbers) {
  totalValue += eachNumber;
}
console.log('Your order total from this second for..of loop is ' + totalValue);

// Testing another for..of loop
// The first for loop adds each number from 1-100 to an array
// The nested for..of loop takes the numbers from the array, and adds them together
let numsToOneHundred = [];
let sumOfAllNums = 0;
for (let i = 0; i <= 100; i++) {
  numsToOneHundred.push(i);
  for (let iEachNumber of numsToOneHundred) {
    sumOfAllNums += iEachNumber;
  }
}
console.log(`The sum of adding each number between 1 and 100 is ${sumOfAllNums}`); 