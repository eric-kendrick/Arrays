
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

//The Index Position

/* The indices of an array denote a particular element's position within the array.
Javascript arrays are zero-indexed, which means the first element of the array is 
positioned at index 0, the second at index 1, and so on. These indices are important 
when using certain methods, such as the previously called splice method. An element can
be accessed by its respective index using bracket notation. For example, in the the
"pals" array, I can console log the element "Ben" using console.log(pals[0]). */
console.log(pals[0]); //returns Ben