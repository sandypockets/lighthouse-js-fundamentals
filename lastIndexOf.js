// Determine the index number of the last occurrence of a value (represented as 'item') in an array
function lastIndexOf(array, item) {
  for (let i = array.length; i > 0; i--) {
    if (array[i - 1] === item)
      return i - 1; 
    } 
    return -1;
  }

// Debugging
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1)); // Should print: 3
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2)); // Should print: 4
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3)); // Should print: -1
console.log(lastIndexOf([ 5, 5, 5 ], 5));       // Should print: 2
console.log(lastIndexOf([], 3));                // Should print: -1