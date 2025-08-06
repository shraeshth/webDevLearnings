// Chapter 8: Arrays
// Arrays are ordered collections of data.
// They're zero-indexed and allow dynamic resizing.
// JavaScript arrays can hold mixed data types.

// -------------------- Array Declaration --------------------
const arr1 = [1, 2, 3];
const arr2 = new Array(5); // [ <5 empty items> ]
const arr3 = Array.of(10, 20); // [10, 20]
const arr4 = Array.from("abc"); // ["a", "b", "c"]

// -------------------- Array Properties --------------------
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // 3
console.log(fruits[0]); // "apple"
console.log(fruits[fruits.length - 1]); // "cherry"

// -------------------- Basic Mutating Methods --------------------
const colors = ["red", "green", "blue"];

colors.push("yellow"); // Add to end
colors.pop(); // Remove from end
colors.unshift("black"); // Add to start
colors.shift(); // Remove from start

// -------------------- Splice vs Slice --------------------
let nums = [10, 20, 30, 40, 50];

const sliced = nums.slice(1, 4); // [20, 30, 40] — original not changed
const spliced = nums.splice(2, 2); // removes 2 items from index 2 → [30, 40]

// -------------------- Iteration Methods --------------------
// All of these accept a callback with parameters: (value, index, array)

const arr = [1, 2, 3, 4, 5];

// forEach — executes for each item (no return)
arr.forEach((val) => console.log(val * 2));

// map — returns new array
const squares = arr.map((x) => x * x); // [1, 4, 9, 16, 25]

// filter — returns elements that satisfy condition
const evens = arr.filter((x) => x % 2 === 0); // [2, 4]

// reduce — returns accumulated value
const sum = arr.reduce((acc, curr) => acc + curr, 0); // 15

// find — returns first match
const found = arr.find((x) => x > 3); // 4

// some — returns true if at least one satisfies
const hasNegative = arr.some((x) => x < 0); // false

// every — checks if all satisfy
const allPositive = arr.every((x) => x > 0); // true

// includes — checks if value exists
console.log(arr.includes(3)); // true

// indexOf — gets index of value
console.log(arr.indexOf(4)); // 3

// -------------------- Array + Objects --------------------
const users = [
  { id: 1, name: "Riya" },
  { id: 2, name: "Aryan" },
];

// Find a user by ID
const user = users.find((u) => u.id === 2); // { id: 2, name: "Aryan" }

// Filter users by condition
const result = users.filter((u) => u.name.startsWith("R"));

// -------------------- Destructuring --------------------
// Unpacks values from arrays or properties from objects into distinct variables

// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // "red"
console.log(second); // "green"

// Skipping values
const [, , third] = colors;
console.log(third); // "blue"

// Using rest in destructuring
const [head, ...tail] = colors;
console.log(head); // "red"
console.log(tail); // ["green", "blue"]

// Swapping values
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// -------------------- Spread Operator (`...`) --------------------
// Expands elements from arrays or objects

// Array Spread
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// Cloning arrays
const original = [5, 6, 7];
const clone = [...original];
console.log(clone); // [5, 6, 7]

// -------------------- Rest Operator (`...`) --------------------
// Collects remaining items into an array
// Rest in Array Destructuring
const [firstColor, ...restColors] = ["red", "blue", "green"];
console.log(restColors); // ["blue", "green"]

// -------------------- Common Confusions --------------------
// - forEach returns undefined, can't chain
// - map always returns same length
// - filter doesn't modify original array
// - slice does NOT include end index
// - push returns new length, not array
// - Spread and rest use the same syntax (...) but have opposite meanings:
//   - Spread expands
//   - Rest collects
// - Spread only performs a shallow copy
// - Destructuring fails if the structure is not as expected

// -------------------- Practice Problem 1 --------------------
// Create a new array of squares from [2, 4, 6]
const input1 = [2, 4, 6];
const squares1 = input1.map((x) => x ** 2);
console.log(squares1); // [4, 16, 36]

// -------------------- Practice Problem 2 --------------------
// From [1, 2, 3, 4, 5], keep only even numbers
const input2 = [1, 2, 3, 4, 5];
const evens2 = input2.filter((x) => x % 2 === 0);
console.log(evens2); // [2, 4]

// -------------------- Practice Problem 3 --------------------
// Sum all numbers in [1, 2, 3, 4]
const sumAll = [1, 2, 3, 4].reduce((sum, val) => sum + val, 0);
console.log(sumAll); // 10

// -------------------- Practice Problem 4 --------------------
// From ["a", "b", "c"], return ["A", "B", "C"]
const letters = ["a", "b", "c"].map((l) => l.toUpperCase());
console.log(letters); // ["A", "B", "C"]

// -------------------- Industry Best Practices --------------------
// - Use forEach when performing side effects (e.g., console.log)
// - Use map to transform data (never mutate original array)
// - Use reduce carefully — keep it readable and avoid overly complex logic
// - Use slice for cloning: const copy = arr.slice()
// - Avoid using for...in with arrays (it's meant for objects)
// - Don't mutate original arrays unless necessary — prefer pure operations
// - Use find/filter to access objects by ID or property
// - Use Array.isArray() to check if a value is truly an array

// Example: Safe array check
function process(data) {
  if (!Array.isArray(data)) return;
  data.forEach((item) => console.log(item));
}