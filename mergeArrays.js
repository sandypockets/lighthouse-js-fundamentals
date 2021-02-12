// Takes in two arrays, concatenates them together into a single array, then sorts the array numerically.
const merge = function (array1, array2) {
  let joined = array1.concat(array2);
  let sorted = joined.sort();
  return sorted;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));   // Returns [ 1, 2, 3, 4, 4, 5, 6 ]
console.log(merge([ 4 ], [ 2, 5, 8 ]));   // Returns [ 2, 4, 5, 8 ]
console.log(merge([ 1, 2, 6 ], []));   // Returns [ 1, 2, 6 ]