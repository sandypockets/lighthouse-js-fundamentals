// A function to concatenate two arrays together.
function concat(n1, n2) {
  let joined = n1.concat(n2);
  return joined;
}

// Debugging
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ])); 
// Should evaluate to: [ 1, 2, 3, 4, 5, 6 ]);

console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
// Should evaluate to: [ 0, 3, 1, 9, 7, 2 ]);

console.log(concat([], [ 9, 7, 2 ]));
// Should evaluate to: [ 9, 7, 2 ]);

console.log(concat([ 5, 10 ], []));
// Should evaluate to: [ 5, 10 ]);




