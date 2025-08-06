// Chapter 5: Loops & Iteration
// Loops allow you to execute a block of code multiple times.

// -------------------- for Loop --------------------
// Syntax:
for (start; end; update) {
  // code to run
}
// Example
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}

// -------------------- while Loop --------------------
// Syntax:
start
while (condition) {
  // code to run
  update;
}
// Example
let count = 0;
while (count < 3) {
  console.log("count =", count);
  count++;
}
// work best when number of iterations is unknown

// -------------------- do...while Loop --------------------
// Syntax:
start
do {
  // code to run
  update;
} while (condition);

// Example
let num = 0;
do {
  console.log("num =", num);
  num++;
} while (num < 2);
// work best when number of iterations is unknown

// -------------------- for...of Loop --------------------
// Used to iterate over iterable objects.
// Syntax:
for (const item of iterable) {
  // code to run
}

// Example
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// -------------------- for...in Loop --------------------
// Used to iterate over the enumerable properties only for objects, not arrays (may cause issues with unexpected keys)
// Syntax:
for (const key in object) {
  // code to run
}

// Example
const person = { name: "Riya", age: 22 };
for (const key in person) {
  console.log(key, "=>", person[key]);
}

// -------------------- for...Each Loop --------------------
// forEach is a method for arrays only. It calls a function for each element.
// Syntax:
array.forEach((element, index, array) => {
    fat arrow fnc
});

// Example
const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(`Index ${index}: ${color}`);
});
// forEach can't use break or continue

// -------------------- break & continue --------------------

for (let i = 0; i < 5; i++) {
  if (i === 3) break;      // exits the loop completely
  console.log("break loop i =", i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;   // skips this iteration
  console.log("continue loop i =", i);
}

// -------------------- Nested Loops --------------------

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// -------------------- Confusions Explained --------------------
// forEach vs for...of
//    - forEach: only for arrays, no break/continue
//    - for...of: for all iterables, supports break/continue
//
// for...in vs for...of
//    - for...in: object keys
//    - for...of: array elements (or anything iterable)
//
// Is forEach better than for?
//    - Use forEach for cleaner code
//    - Use for when you need early exit or index access

// -------------------- Practice Problem 1 --------------------
// Sum all elements in an array
const numbers = [5, 10, 15];
let total = 0;
for (const num of numbers) {
  total += num;
}
console.log("Sum:", total); // 30

// -------------------- Practice Problem 2 --------------------
// Find the largest number
const scores = [13, 4, 20, 11];
let max = scores[0];
for (const score of scores) {
  if (score > max) max = score;
}
console.log("Max score:", max); // 20

// -------------------- Practice Problem 3 --------------------
// Print all keys and values from an object
const book = { title: "JS Mastery", price: 499 };
for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}

// -------------------- Practice Problem 4 --------------------
// Count vowels in a string
const input = "javascript";
let vowelCount = 0;
const vowels = "aeiou";
for (const ch of input) {
  if (vowels.includes(ch)) vowelCount++;
}
console.log("Vowel count:", vowelCount); // 3

// -------------------- Practice Problem 5 --------------------
// Flatten a nested array (one level deep)
const nested = [[1, 2], [3], [4, 5]];
const flat = [];
for (const group of nested) {
  for (const item of group) {
    flat.push(item);
  }
}
console.log("Flattened:", flat); // [1, 2, 3, 4, 5]

// -------------------- Industry Best Practices --------------------

// 1. Prefer array methods like forEach, map, filter for array processing
//    - They are more declarative, readable, and easier to reason about

// 2. Use for...of when you need early exits (break/continue)
//    - Best for iterables (arrays, strings, sets, maps)

// 3. Avoid for...in with arrays
//    - It loops over enumerable properties, not just indexes
//    - Can include prototype properties unexpectedly

// 4. Avoid classic for-loop unless index control is absolutely necessary
//    - Modern JavaScript favors clarity over manual index management

// 5. Limit nesting in loops
//    - Extract inner logic to separate functions for cleaner code
//    - Deeply nested loops are hard to maintain and often indicate poor data structure choices

// 6. Avoid mutating arrays inside loops (especially during iteration)
//    - This can lead to bugs; use immutable patterns when possible

// 7. Do not use async/await inside forEach
//    - forEach does not await promises, use for...of or map with Promise.all instead