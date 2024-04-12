// IV. Functions

console.log(`A. printGreeting
Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

Like so?

console.log(printGreeting("Slimer"));
=> Hello there, Slimer!
You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
`);

function printGreeting(name) {
    const greeting = `
Good Morning ${name}, how are you doing today? You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.`;
    return greeting;
}

console.log(printGreeting("Anthony"));

console.log(`
B. printCool
Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
console.log(printCool("Captain Reynolds"));
=> "Captain Reynolds is cool";

`);

function printCool(name) {
    return `${name} is cool!!!!`;
}

console.log(printCool("Anthony"));

console.log(`
C. calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
console.log(calculateCube(5));
=> 125

`);

function calculateCube(edge) {
    return edge ** 3;
}

console.log(calculateCube(5));

console.log(`
D. isVowel
Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
console.log(isVowel("a"));
=> true

`);

function isVowel(char) {
    let isVowel = false;

    if (char.length > 1) {
        throw "Only one character allowed.";
    } else if (
        char.toLowerCase() === "a" ||
        char.toLowerCase() === "e" ||
        char.toLowerCase() === "i" ||
        char.toLowerCase() === "o" ||
        char.toLowerCase() === "u"
    ) {
        isVowel = true;
    }

    return isVowel;
}

console.log(isVowel("U"));

console.log(`
E. getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]
`);

function getTwoLengths(str1, str2) {
    return [str1.length, str2.length];
}

console.log(getTwoLengths("Tornado", "Helicopter"));

console.log(`
F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]
`);

function getMultipleLengths(...args) {
    let lenArr = [];
    for (str in args[0]) {
        const names = args[0][str];
        lenArr.push(names.length);
    }
    return lenArr;
}
const names = ["Anthony", "Petey", "AJ", "Kimora", "Kimani"];

console.log(getMultipleLengths(names));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
