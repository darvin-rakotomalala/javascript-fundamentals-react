// JavaScript ES5 function
function getGreetingES5() {
  return "Example ES5 - Welcome to JavaScript";
}

// JavaScript ES6 arrow function with body
const getGreetingES6 = () => {
  return "Example ES6 - Welcome to JavaScript";
};

// JavaScript ES6 arrow function without body and implicit return
const getGreetingES6implicit = () => "Example ES6 - Welcome to JavaScript";

console.log(getGreetingES5());
console.log(getGreetingES6());
console.log(getGreetingES6implicit());
