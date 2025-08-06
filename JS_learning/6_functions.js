// Chapter 6: Functionss
// Functions are reusable blocks of logic.
// They help organize code, reduce duplication, and improve readability.
// In JavaScript, functions are first-class citizens — you can assign them to variables, pass them as arguments, and return them from other functions.

// -------------------- Function Declaration --------------------
// Hoisted. You can call it before it's defined in code.
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

// -------------------- Function Expression --------------------
// Not hoisted. Anonymous or named functions assigned to variables.
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5

// -------------------- Fat Arrow Functions --------------------
// Shorter syntax. No own `this`, `arguments`, or `super`.
const multiply = (a, b) => a * b;
const square = (x) => x * x;
const logName = () => console.log("Anonymous");

// Block body arrow function
const divide = (a, b) => {
  return a / b;
};

// -------------------- Default Parameters --------------------
//we give prameter some default value in case no arguement is passed
function sayHello(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(sayHello()); // Hello, Guest

// -------------------- Rest Parameters --------------------
// Allows a function to accept an indefinite number of arguments as an array.
function total(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
console.log(total(1, 2, 3, 4)); // 10

// -------------------- Callback Functions --------------------
// A function passed as an argument to another function to be executed later. Enables asynchronous or deferred execution
function runTask(callback) {
  console.log("Starting...");
  callback();
  console.log("Finished.");
}
runTask(() => console.log("Task running"));

// -------------------- Immediately Invoked Function Expression (IIFE) --------------------
// A function that is defined and executed immediately. Helps create private scopes. Commonly used in modules or to avoid polluting the global scope.
(function () {
  const secret = "hidden";
  console.log("IIFE ran");
})();

// -------------------- Pure vs Impure --------------------
// Pure
// A function that always returns the same output for the same input and has no side effects. Does not modify external state, Easy to test and cache (memoization).
function pureDouble(x) {
  return x * 2;
}

// Impure
// Functions that rely on or modify external state. Can lead to unpredictable behavior, Often necessary in UI or I/O logic.
let counter = 0;
function impureIncrement() {
  counter++;
}

// -------------------- First-Class & Higher-Order --------------------
// Functions are treated like variables — can be passed as arguments, returned, and assigned are called First-Class, Functions that take other functions as parameters or return function are called Higher-Order.

function applyTwice(fn, val) {
  return fn(fn(val));
}
const increment = (x) => x + 1;
console.log(applyTwice(increment, 3)); // 5

// -------------------- Recursion --------------------
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// -------------------- Confusions Clarified --------------------

// Function Declaration vs Expression:
// - Declarations are hoisted. Expressions are not.
// - Use declarations for named reusable functions.

// Arrow vs Regular Functions:
// - Arrows do not bind their own `this`, use regular functions for object methods or constructors.

// arguments vs rest parameters:
// - Use rest (...args) — more modern and flexible.
// - `arguments` is array-like and not available in arrow functions.

// Callback vs Promise:
// - Use callbacks for sync or simple logic. Prefer promises/async-await for asynchronous workflows.

// -------------------- Practice Problem 1 --------------------
// Write a function that checks if a number is even
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(6)); // true

// -------------------- Practice Problem 2 --------------------
// Write a function that reverses a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("javascript")); // tpircsavaj

// -------------------- Practice Problem 3 --------------------
// Write a function that counts words in a sentence
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}
console.log(countWords("this is a test string")); // 5

// -------------------- Practice Problem 4 --------------------
// Write a function that finds the maximum of variable arguments
function maxOf(...values) {
  return Math.max(...values);
}
console.log(maxOf(10, 99, 23, 88)); // 99

// -------------------- Practice Problem 5 --------------------
// Write a recursive function to get the nth Fibonacci number
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(7)); // 13

// -------------------- Industry Best Practices --------------------

// 1. Keep functions small and focused
//    - A function should do one thing well

// 2. Use descriptive function names
//    - getUserById(), formatDate(), not doThing()

// 3. Prefer pure functions for logic
//    - They are testable, predictable, and easier to reuse

// 4. Avoid modifying outer variables inside functions
//    - Encourages side-effect-free design

// 5. Use arrow functions for short callbacks
//    - Avoid for constructors or methods needing `this`

// 6. Use default and rest parameters over `arguments`
//    - Modern syntax is clearer and avoids surprises

// 7. Prefer async/await for asynchronous logic
//    - More readable than callback nesting

// 8. Do not use async/await inside forEach
//    - Use for...of + await or Promise.all with map