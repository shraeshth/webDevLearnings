// Chapter 3: Operators & Expressions
// JavaScript uses operators to perform operations on values and variables.
// Operators are categorized by functionality:

// -------------------- Arithmetic Operators --------------------
let a = 10;
let b = 3;

console.log(a + b); // 13  (Addition)
console.log(a - b); // 7   (Subtraction)
console.log(a * b); // 30  (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1   (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation)

// -------------------- Assignment Operators --------------------
let x = 5;
x += 3; // same as x = x + 3
console.log(x); // 8

x *= 2; // x = x * 2
console.log(x); // 16

// Other assignment operators: -=, /=, %=, **=

// -------------------- Comparison Operators --------------------
console.log(5 == "5"); // true  (loose equality, type conversion)
console.log(5 === "5"); // false (strict equality)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false

// -------------------- Logical Operators --------------------
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false (AND)
console.log(isAdult || hasID); // true  (OR)
console.log(!isAdult); // false (NOT)

// -------------------- String Operators --------------------
let first = "Hello";
let second = "World";
console.log(first + " " + second); // "Hello World"

// += also works with strings
let message = "Hi";
message += ", there!";
console.log(message); // "Hi, there!"

// -------------------- Type Operators --------------------
console.log(typeof 123); // "number"
console.log(typeof "abc"); // "string"

// instanceof checks if an object is an instance of a class or constructor
const date = new Date();
console.log(date instanceof Date); // true

// -------------------- Ternary Operator --------------------
let age = 20;
let canDrive = age >= 18 ? "Yes" : "No";
console.log("Can drive:", canDrive);

// -------------------- Optional Chaining --------------------
const user = {
  profile: {
    name: "Alice",
  },
};
console.log(user?.profile?.name); // "Alice"
console.log(user?.settings?.theme); // undefined (no error)

// -------------------- Nullish Coalescing Operator (??) --------------------
let input = null;
let result = input ?? "Default Value"; // returns "Default Value" if null/undefined
console.log(result);

// -------------------- Industry Best Practices --------------------

// 1. Prefer strict equality (===) over loose equality (==)
//    - Avoids unexpected coercion and ensures reliable comparisons

// 2. Use logical short-circuiting for concise conditions
//    - Example: isLoggedIn && showDashboard();

// 3. Avoid nested ternary expressions
//    - They reduce code readability. Prefer if/else blocks instead.

// 4. Use nullish coalescing (??) for default values
//    - Handles null or undefined safely (e.g., value ?? "default")

// 5. Know operator precedence to avoid logic bugs
//    - Use parentheses to clarify complex expressions