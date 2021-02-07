// Functions - Area Calculator

// Determine area of a rectangle
const calculateRectangleArea = function (length, width) {
  let output = length * width
  if (output > 0) {
    return output;
  }
}

// Determine area of a triangle
const calculateTriangleArea = function (base, height) {
  let output = base * height / 2;
  if (output > 0) {
    return output;
  }
}

// Determine area of a circle
const calculateCircleArea = function (radius) {
  if (radius > 0) {
    let output = Math.PI * (radius * radius);
    return output;
  }
}

// Debugging
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(-1, 0));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(-1, 0)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
