// Functions - How Many Hundreds
/*When this function is given a number, it should return how many hundreds 
fit into that number.*/

const howManyHundreds = function (num) {
  let containers = Math.floor(num / 100);
  let remainder = num % 100;
  return `This batch of syrup can fill ${containers} of 100. There will be ${remainder} bottles remaining for the next trip.`;
}
console.log(howManyHundreds(894));