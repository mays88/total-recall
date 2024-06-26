console.log(`
A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
`);

const user = {
    name: "Anthony",
    email: "myemail@email.com",
    age: 35,
    purchased: [],
};

console.log(user);

console.log(`
B. Update the user
Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

`);

user.email = "newEmail@email.com";
console.log(user);

console.log(`
Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
`);

user.age++;
console.log(
    `
    
EVERYONE SAY HAPPY BIRTHDAY TO ${user.name}!!!! Today he turned ${user.age} years young. `
);

console.log(`
C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.

Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
`);

user.location = "Detroit, Mi";

console.log(`
${user.name} has updated his location to ${user.location}`);

console.log(`
D. Shopaholic!
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
Console.log just the "Merino jodhpurs" from the purchased array.
`);

user.purchased.push("Carbohydrates", "Peace of Mind", "Merino Jodhpurs");

for (item of user.purchased) {
    if (item === "Merino Jodhpurs") {
        console.log(`
${user.name} has purchased some ${item}.
`);
    }
}

console.log(`
E. Object-within-object
Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}
When we console.log user, we would see the friend object added to our user object.

Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
Console.log just the friend's name
Console.log just the friend's location
CHANGE the friend's age to 55
The friend has purchased "The One Ring". Use ${"``"}.push()to add "The One Ring" to the friend's purchased${"`"} array.
The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
Console.log just "A latte" from the friend's purchased array.
`);

user.friend = {
    name: "Delrese",
    age: 34,
    location: "Inkster, Mi",
    purchased: [],
};

console.log(user.friend);

console.log(`
${user.name} has a friend named ${user.friend.name} that lives in ${user.friend.location}.
`);

user.friend.age = 55;

console.log(user.friend);

user.friend.purchased.push("The One Ring", "a Latte");
for (item of user.friend.purchased) {
    if (item === "a Latte") {
        console.log(`
${user.friend.name} has purchased ${item}.
`);
    }
}

console.log(`
F. Loops
Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
`);

for (item in user.purchased) {
    console.log(
        `
${user.name}'s Item ${parseInt(item) + 1} purchased is ${user.purchased[item]}`
    );
}
for (item in user.friend.purchased) {
    console.log(
        `
${user.friend.name}'s Item ${parseInt(item) + 1} purchased is ${
            user.friend.purchased[item]
        }`
    );
}
