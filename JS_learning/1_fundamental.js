// Chapter 1: Variables & Declarations
// Variables are containers that store data. You can use them to store and manipulate values.
// In JavaScript, we declare variables using var, let, and const.

// -------------------- var --------------------
// var is function-scoped and can be redeclared and reassigned.
// Hoisted and initialized with undefined.

var score = 10;
var score = 20; // Allowed
console.log("score with var:", score); // 20

// -------------------- let --------------------
// let is block-scoped and can be reassigned but not redeclared in the same scope.
// Hoisted but not initialized (TDZ - Temporal Dead Zone)

let age = 25;
age = 30; // OK
// let age = 40; //  Error: Identifier 'age' has already been declared
console.log("age with let:", age); // 30

// -------------------- const --------------------
// const is block-scoped and cannot be reassigned or redeclared.
// Must be initialized at the time of declaration.

const PI = 3.14;
// PI = 3.14159; //  Error: Assignment to constant variable
console.log("PI:", PI); // 3.14

// const with objects and arrays (contents can be modified)
const student = { name: "Riya" };
student.name = "Priya"; // 
// student = {}; //  Error: Assignment to constant variable
console.log("student:", student); // { name: "Priya" }

const numbers = [1, 2, 3];
numbers.push(4); // 
// numbers = [5, 6]; // 
console.log("numbers:", numbers); // [1, 2, 3, 4]

// -------------------- Scope --------------------
// Block Scope (let, const): limited to {...}
// Function Scope (var): limited to function

{
  var x = 5;
  let y = 10;
  const z = 15;
}
console.log(x); //  5
// console.log(y); //  ReferenceError
// console.log(z); // ReferenceError

// -------------------- Hoisting --------------------
// Declarations are moved to the top of their scope.
// var is hoisted and initialized as undefined.
// let and const are hoisted but not initialized.

console.log(a); // undefined
var a = 10;

// console.log(b); //  ReferenceError: Cannot access 'b' before initialization
let b = 20;

// -------------------- Best Practices --------------------
// Avoid using var unless necessary (legacy code).

// -------------------- Questions Answered --------------------
// Q: What happens if you access let before declaration?
// A: ReferenceError due to Temporal Dead Zone. The time between the beginning of the block scope and the line where the variable is declared.

// Q: Can you change contents of const array/object?
// A: Yes, but you cannot reassign the variable itself.

// Q: Is const fully constant?
// A: No, it only prevents reassignment of the variable itself, not mutation of the value if it's an object or array.
// A const object
const car = { brand: "Toyota", model: "Camry" };

// Modifying a property inside the object is allowed
car.model = "Corolla"; //  Allowed
console.log(car); // { brand: "Toyota", model: "Corolla" }

// Reassigning the object itself is not allowed
// car = { brand: "Honda" }; //  Error: Assignment to constant variable

// -------------------- Extra Examples --------------------
// Example of shadowing
let value = "outer";
{
  let value = "inner";
  console.log("inner value:", value); // inner
}
console.log("outer value:", value); // outer

// Example of global vs local var
var globalVar = "I'm global";
function testScope() {
  var globalVar = "I'm local";
  console.log("Inside function:", globalVar);
}
testScope();
console.log("Outside function:", globalVar);

// -------------------- Industry Best Practices --------------------

// 1. Prefer const by default
//    - Use const unless you need to reassign the variable later.
//    - This reduces accidental reassignments and improves readability.

// 2. Use let when reassignment is required
//    - For loop counters or values that genuinely change over time.

// 3. Avoid var
//    - var is function-scoped and prone to hoisting-related bugs.
//    - Only use it in legacy codebases where it's already in use.

// 4. Use block scoping (let/const) to prevent leakage
//    - Always wrap variables in blocks or functions to avoid polluting global scope.

// 5. Declare all variables at the top of the block
//    - Helps avoid hoisting confusion and makes your code predictable.

// 6. Never redeclare let/const in the same scope
//    - Can cause unnecessary errors and reduce maintainability.