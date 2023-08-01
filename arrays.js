
// Declare a variable that stores an array of at least four strings
let pals = ["Ben", "Brent", "Elise", "Eric", "Tammy"];
// Declare a variable that stores an array of at least four numbers
let ages = [39, 36, 41, 35, 37];
//Declare a variable that stores an array of at least four booleans
let boolArr = [false, true, true, false];


// Call pop method to remove the last element from the boolean array
boolArr.pop();
console.log(boolArr);

// Call splice method on ages array to add a new number element at index 2
ages.splice(2, 0, 12);
console.log(ages);

/* Call filter method to create a shallow copy of the pals array filtered 
with an arrow function. Function will set parameters to filter out names under 
five characters in length
// */
console.log(pals.filter(pals => pals.length > 4));