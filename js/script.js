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

console.log(
    "----------Write a loop that will print out all the numbers from 0 to 10, inclusive----------"
);

for (let x = 0; x <= 10; x++) {
    console.log(x);
}

console.log(
    "----------Write a loop that will print out all the numbers from 10 up to and including 400----------"
);

for (let x = 10; x <= 400; x++) {
    console.log(x);
}

console.log(
    "----------Write a loop that will print out every third number starting with 12 and going no higher than 4000----------"
);

for (let x = 12; x <= 4000; x += 3) {
    console.log(x);
}

/**
 *
 * B. Basics
 *
 */

console.log(
    "----------Print out the numbers that are within the range of 1 - 100----------"
);
console.log(
    `----------Adjust your code to add a message next to even numbers only that says: "is an even number"----------`
);
for (let even = 1; even <= 100; even++) {
    if (even % 2 === 0) {
        console.log(`${even} is an even number.`);
    } else {
        console.log(even);
    }
}

console.log(`--For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five Example Output:
I found a 5. High five!
I found a 10. High five!

--Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three Example Output:
I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!

-- For numbers divisible by both three and five, be sure your code prints both messages`);

for (let num = 0; num <= 100; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(`I found a ${num}. Three is a crowd, High five!`);
    } else if (num % 5 === 0) {
        console.log(`I found a ${num}. High five!`);
    } else if (num % 3 === 0) {
        console.log(`I found a ${num}. Three is a crowd`);
    } else {
        console.log(`I found a ${num}.`);
    }
}

console.log(`

Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

Check your work! Your bank_account should have $10,100 in it.`);

// Code for all above
let toSumNum = 100;
let bankAcct = 0;

for (let x = 0; x <= toSumNum; x++) {
    bankAcct += x;
}
console.log(`

Your bank account currently has $${bankAcct * 2} in it.

`);
