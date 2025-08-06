// Chapter 2: Data Types + Type System
// In JavaScript, every value has a type. There are two main categories:
// 1. Primitive types (stored directly)
// 2. Reference types (stored by reference)

// -------------------- Primitive Types --------------------
// String, Number, Boolean, Undefined, Null, Symbol, BigInt

const str = "Hello"; // String
const num = 42; // Number
const flag = true; // Boolean
let nothing; // Undefined
const empty = null; // Null
const sym = Symbol("id"); // Symbol (unique) creates a unique and immutable value, even if another symbol is created with the same description. Symbols are often used as unique property keys in objects to avoid name collisions
const big = 1234567890123456789012345678901234567890n; // BigInt is used to represent integers larger than what Number can safely handle (i.e., beyond 2⁵³ - 1). BigInts allow for arbitrary-precision arithmetic.

//some crazy bugs
console.log(typeof flag); // boolean
console.log(typeof nothing); // undefined
console.log(typeof empty); // object (this is a long-standing JS bug)

// -------------------- Reference Types --------------------
// Object, Array, Function

const obj = { name: "Alice", age: 30 };
const arr = [1, 2, 3];
const greet = function () {
  console.log("Hello!");
};

console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(typeof greet); // function

// -------------------- Type Coercion --------------------
// JavaScript automatically converts types when necessary

console.log("5" + 1); // "51" (number becomes string)
console.log("5" - 1); // 4   (string becomes number)
console.log(true + 1); // 2   (true becomes 1)
console.log(null + 1); // 1   (null becomes 0)
console.log(undefined + 1); // NaN

// -------------------- Equality --------------------
// == performs type coercion, === does not

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// -------------------- NaN --------------------
// NaN means Not a Number, but its type is "number"

console.log(typeof NaN); // "number"

// -------------------- Truthy and Falsy --------------------
// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

if ("0") {
  console.log("'0' is truthy");
}
if ([]) {
  console.log("[] is truthy");
}

// -------------------- Extra: Boolean Conversion --------------------
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean(undefined)); // false

// -------------------- Common Confusions --------------------
// typeof null === "object" (this is a known bug)
// undefined: variable declared but not assigned
// null: explicitly assigned as empty value

// -------------------- Practice Exercise --------------------
// Write a function isEmpty(value) that checks if a given value is null , undefined , or "" ?

function isEmpty(value) {
  return value === null || value === undefined || value === "";
}

console.log(isEmpty(null)); // true
console.log(isEmpty("")); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty("hello")); // false

// -------------------- Industry Best Practices --------------------

// 1. Avoid loose typing with implicit coercion
//    - Use === and !== instead of == and !=
//    - Prevents bugs due to automatic type conversion

// 2. Use typeof cautiously
//    - Remember: typeof null === "object" is a known bug
//    - Prefer checking with === null or Array.isArray()

// 3. Handle undefined and null safely
//    - Use default values or optional chaining to avoid runtime crashes
//    - e.g., user?.profile?.age ?? "N/A"

// 4. Avoid NaN propagation
//    - Always validate input types before doing arithmetic
//    - Use Number.isNaN() to check for NaN

// 5. Treat primitive and reference types differently
//    - Avoid directly mutating objects passed into functions unless intended
//    - Clone when needed (using spread syntax or structuredClone in modern JS)