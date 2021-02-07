// Functions - Age Calculator
// Output the user's name and current age
const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));