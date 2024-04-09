/**
 *
 * VARIABLES
 *
 */

// Declare a new constant variable called myName and assign it your name?

const myName = "Anthony";

// Declare a variable called favoriteLanguage and assign it the value of Python?

let favoriteLanguage = "Python";

// Declare a new variable called newFavoriteLanguage and assign it JavaScript;

let newFavoriteLanguage = "Javascript";

// Assign the value of newFavoriteLanguage to favoriteLanguage referencing each other.

favoriteLanguage = newFavoriteLanguage;

// Finally log or print a message using a Literal String, make use of the variables myName and favoriteLanguage.
console.log(
    `Hello, my Name is ${myName}. My favorite language was Python but after practice, my new favorite is ${favoriteLanguage}.`
);

/**
 *
 * STRINGS
 *
 */

// Create a variable called firstVariable

let firstVariable;

// Assign it the value of the string "Hello World"

firstVariable = "Hello World";

// Change the value of this variable to some number

firstVariable = "88";

// Store the value of firstVariable in a new variable called secondVariable

let secondVariable = firstVariable;

// Change the value of secondVariable to any string.

secondVariable = "Today is the Day";

// What is the value of firstVariable? Log it!

console.log(`The value of the First Variable is ${firstVariable}`);

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean

const yourName = "Anthony";
const greeting = "Hello, my name is ";
const greet = greeting + yourName;

console.log(greet);

/**
 *
 * Booleans
 *
 */

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a < b && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

/**
 *
 * The Farm
 *
 */

// Declare a variable animal. Set it to be either "cow" or something else

let animal = "Lion";

// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit
if (animal === "Cow") {
    console.log("MOOOOOOOOO");
} else {
    console.log("Hey! You're not a cow.");
}

/**
 *
 * Drivers Ed
 *
 */

// Make a variable that holds a person's age; be semantic

let age = 15;

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

if (age >= 16) {
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young.");
}

/**
 *
 * Biggie Smalls
 *
 */

// Create a variable that contains an integer.

const newInt = 100;

// Write an if ... else statement that:
// console.log() "little number" if the number is entered is less than 100
// console.log()  big number if the number is greater than or equal to 100.

if (newInt < 100) {
    console.log("little number");
} else {
    console.log("big number");
}

/**
 *
 * Monkey in the Middle
 *
 */

// Write an if ... else if ... else statement:
// console.log() "little number" if the number entered is less than 5.
// If the number entered is more than 10, log "big number".
// Otherwise, log "monkey".
let num = 7;
if (num < 5) {
    console.log("little number");
} else if (num > 10) {
    console.log("big number");
} else {
    console.log("monkey");
}

/**
 * SECTION 2:
 * A. The Basics
 *
 */

// console.log(
//     "----------Write a loop that will print out all the numbers from 0 to 10, inclusive----------"
// );

// for (let x = 0; x <= 10; x++) {
//     console.log(x);
// }

// console.log(
//     "----------Write a loop that will print out all the numbers from 10 up to and including 400----------"
// );

// for (let x = 10; x <= 400; x++) {
//     console.log(x);
// }

// console.log(
//     "----------Write a loop that will print out every third number starting with 12 and going no higher than 4000----------"
// );

// for (let x = 12; x <= 4000; x += 3) {
//     console.log(x);
// }

/**
 *
 * B. Basics
 *
 */

console.log(
    "----------Print out the [even] numbers that are within the range of 1 - 100----------"
);

for (let even = 0; even <= 100; even++) {
    if (even % 2 === 0) {
        console.log(even);
    }
}
console.log(
    `----------Adjust your code to add a message next to even numbers only that says: "is an even number"----------`
);
