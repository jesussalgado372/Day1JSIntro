// Comments in JS use two forward slashes

// alert("JS IS WORKING!!!")

console.log("This is a message from the app.js!");


// This is how we declare a variable in C#
// We know that C# is a strict programming language
// string myName = "Jesus";

// JS is a loosely typed programming language
// We use let prefix to declare variables when we would need to change the variable later
let myString = "Jesus";
let anotherString = 'Salgado'; // JS will allow both double and single quotes for strings
let myInt = 4; // This is an integer
let myBool = true; // This is a boolean
let myNull = null; // This is null value

var oldWay = "This is the old way to declare variables"; // var is the old way of declaring variables Avoid using var

myString = "Karla";
console.log(myString);

// We can use Const to prevent reassignment of variable(s)
const pi = 3.14;
// pi = 4; // This will throw an error

console.log(myInt + pi);
// JS will implicitly convert data types when necessary
console.log(myString + myInt); // JS will convert the integer to a string and concatenate

console.log(myString+ ""+ anotherString);
console.log( `Full Name:   ${myString} ${anotherString}`); // This is called a template literal

let myArray = [1, 2, 3, 4, "Five", true];
console.log(myArray);

let myElement = document.getElementById("myElement");
console.log(myElement);
myElement.textContent = "I changed the text content from JS!";