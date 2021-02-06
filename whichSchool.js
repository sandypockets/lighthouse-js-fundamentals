/*
Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.
*/

//Function to determine which school the student should attend based on their age
const whichSchool = function (age) {
  if (age < 13) {
    console.log('Elementary School');
  } else if (age >= 13 && age <= 18) {
    console.log('Secondary School');
  } else {
    console.log('Lighthouse Labs');
  }
}

whichSchool(17);