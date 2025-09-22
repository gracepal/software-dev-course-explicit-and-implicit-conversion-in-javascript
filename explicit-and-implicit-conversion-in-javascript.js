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
let result = '5' - 2;
console.log('\n[BEFORE] The result is: ' + result);
// Refactor: explicitly convert '5' to Number for better readability
result = Number('5') - 2;
console.log('[ AFTER] The result is: ' + result);
console.log('\n');

// Explicit conversion of non-empty string to Boolean truthy value
let isValid = Boolean('false');
process.stdout.write('[BEFORE] ');
if (isValid) {
  console.log('This is valid!');
}
// Refactor: implicitly convert without passing in string to Boolean() function
process.stdout.write('[ AFTER] ');
isValid = 'true';
if (isValid) {
  console.log('This is valid!');
}
console.log('\n');

// Implicit conversion to string when adding with non-string
let age = '25';
let totalAge = age + 5;
console.log('[BEFORE] Total Age: ' + totalAge);
// Fix: explicitly convert '25' to Number for expected sum output
age = Number('25');
totalAge = age + 5;
console.log('[ AFTER] Total Age: ' + totalAge);
console.log('\n');

// Edge case
let gradedScore; // undefined -> falsey
if (gradedScore) {
  console.log('Your score has been graded!');
} else {
  console.log(`Waiting in queue (${gradedScore})...`);
}
gradedScore = null; // null -> falsey
if (gradedScore) {
  console.log('Your score has been graded!');
} else {
  console.log(`Picked up for grading (${gradedScore})...`);
}
gradedScore = NaN; // NaN -> falsey
if (gradedScore) {
  console.log('Your score has been graded!');
} else {
  console.log(`Processing grade (${gradedScore})...`);
}
gradedScore = 91; // non-zero number -> truthy
if (gradedScore) {
  console.log('Your score has been graded!');
} else {
  console.log('ERROR');
}
console.log('\n');
