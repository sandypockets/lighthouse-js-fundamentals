//The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end incrementing by step.

function range (start, end, step) {
  let stepCounts = [];
  if (typeof start === 'undefined' || typeof end === 'undefined' || typeof step === 'undefined') {
    stepCounts = [];
  } else if (start > end) {
    stepCounts = [];
  } else if (step <= 0) {
    stepCounts = [];
  } else {
    for (let i = start; i <= end; i += step) {
      stepCounts.push(i);
    }
  }
  return stepCounts;
}

console.log(range(0, 10, 2)); // [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5)); // [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3)); // [ -5, -2, 1 ]
