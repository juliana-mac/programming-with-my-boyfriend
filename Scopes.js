// Global scope:
// Global scope means variables and functions declared here are accessible everywhere in this file.

const myName = "Juliana";
const myAge = 17;

function greet(name, age = 18) {
  // Function scope:
  // Function scope means variables here are only accessible within this function.
  var greeting = "Hello";

  if (age >= 18) {
    // Local scope:
    // Local scope means variables here are only accessible within this block.
    greeting = "Hi responsible individual named";
  } else {
    greeting = "Hi small human named";
  }

  console.log(`${greeting}, ${name}!`);
}

greet(myName, myAge);