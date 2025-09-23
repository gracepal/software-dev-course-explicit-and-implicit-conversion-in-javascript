/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Implicit conversion to number when subtracting with non-number
// Correct as-is, already an implicit conversion
let result = '5' - 2;
console.log('\nThe result is: ' + result);

// Explicit conversion of non-empty string to Boolean truthy value
// Correct as-is, already an explitcit conversion using Boolean() constructor
let isValid = Boolean('false');
if (isValid) {
  console.log('This is valid!');
}

// Implicit conversion to string when adding with non-string
// Fix: explicitly convert '25' to Number() so that output is a number and not a string concatenation
let age = Number('25');
let totalAge = age + 5;
console.log('Total Age: ' + totalAge);

// Add edge case - Implicit type conversion
// Because the if statement evaluates the variable as boolean
let gradedScore = null; // null -> falsey
if (gradedScore) {
  console.log('Your score has been graded!');
}

// Add edge case - Explicit type conversion
// Because the .toString() method converts gradedScore to a string
gradedScore = 91;
graded = gradedScore.toString();
console.log('Your graded score is: ' + graded);
console.log('After conversion:', typeof graded);
console.log('\n');
