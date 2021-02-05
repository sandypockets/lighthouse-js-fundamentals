/*This file contains two programs. 
* One to determine what to wear based on the weather (raining, cold). 
* Another to determine what to wear based on the temperature alone.
*/

//Program 1
//What you should wear based on the weather
let titleOne = '-First Program-'
console.log(titleOne);

//Adjust variables according to the current weather
const raining = true;
const cold = true;

if (raining && !cold) {
  console.log('It\'s raining!');
} else if (cold && !raining) {
  console.log('It\'s cold!');
} else if (raining && cold) {
  console.log('It\'s raining and it\'s cold!');
}

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


console.log('\n'); //Adding a paragraph break to help differentiate between the two programs while comparing outputs.

//Program 2
//What you should wear based on the temperature
let titleTwo = '-Second Program-';
console.log(titleTwo);
const temperature = 1; //Adjust constant according to the outside temperature
console.log(`The temperature is ${temperature} degree.`);

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

console.log('\n');

//Program 3 - More conditionals!
//Checks whether person is BOTH a citizen, and legal voting age. 
console.log('-Third Program-');
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

console.log('\n');

//Program 4
//Checks if the temperature is too hostile to go outside.
//The temperature variable from above is being reused, so the current temperature is 1
console.log('-Fourth Program-');
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
} else {
  console.log("Going outside is a great idea!");
}

console.log('\n');

//Program 5
//Checks that it is not raining, and informs the user they don't need an umbrella. 
console.log('-Fifth Program-');
if (!raining) {
  console.log("Leave your umbrella at home!");
} else {
  console.log("You're going to need your umbrella today!");
}

