// We need to complete a function called smartGarbage(trash, bins), which will be responsible for increasing the garbage 
// count for waste, recycling, or compost depending on what trash is submitted.

// Our function will receive two arguments:
// The first argument, trash, is a string that will tell our function what type of item is being submitted.
// The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical 
// value. Our function must increase the correct value in the bins object, and then the newly updated object.

// Function to detect trash type, and filter into appropriate bin
const smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste++;
    return bins;
  } else if (trash === 'recycling') {
    bins.recycling++;
    return bins;
  } else if (trash === 'compost') {
    bins.compost++;
    return bins;
  } else {
    "This trash type is not accepted.";
  } 
}

// Debugging - Should print:
// {waste: 4, recycling: 3, compost: 5}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));