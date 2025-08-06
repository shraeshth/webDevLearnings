// Chapter 7: Scope & Closures
// Scope defines where variables can be accessed.
// Closures allow a function to "remember" variables from its lexical (surrounding) scope, even after the outer function has finished execution.

// -------------------- Types of Scope --------------------
// 1. Global Scope → available everywhere
// 2. Function Scope → available only inside the function
// 3. Block Scope → available inside { ... } (only for let & const)

let globalVar = "I'm global";

function demoScope() {
  let funcVar = "I'm local to this function";
  if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar); // OK
  }
  // console.log(blockVar); // ReferenceError
  console.log(funcVar); // OK
}
demoScope();
// console.log(funcVar); // ReferenceError

// -------------------- Lexical Scope --------------------
// Inner functions can access outer variables (but not vice versa)

function outer() {
  const outerVar = "from outer";
  function inner() {
    console.log(outerVar); //  Accessible
  }
  inner();
}
outer();

// -------------------- Closures --------------------
// A closure is formed when a function retains access to variables from its lexical scope.

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

// -------------------- Closures Use Cases --------------------
// - Data encapsulation
// - Function factories
// - Event handlers with preserved data
// - Memoization

// -------------------- Closures with Asynchronous Code --------------------
function delayedPrint(msg) {
  setTimeout(function () {
    console.log(msg); // Closure captures `msg`
  }, 1000);
}
delayedPrint("This was delayed");

// -------------------- Common Confusions --------------------

// Q: Can closures modify outer variables?
// A: Yes. If the variable is in the lexical scope, it can be changed.

function example() {
  let x = 5;
  return function () {
    x++;
    console.log(x);
  };
}
const updateX = example();
updateX(); // 6
updateX(); // 7

// Q: Does closure keep variable value or reference?
// A: It keeps the reference — it remembers the live variable, not just a snapshot.

// -------------------- Practice Problem 1 --------------------
// Create a function that returns a greeting with a preserved name

function greetUser(name) {
  return function () {
    return `Hello, ${name}`;
  };
}
const greetJohn = greetUser("John");
console.log(greetJohn()); // Hello, John

// -------------------- Practice Problem 2 --------------------
// Create a function that limits access after 3 calls

function accessLimiter() {
  let count = 0;
  return function () {
    count++;
    if (count <= 3) {
      console.log("Access granted");
    } else {
      console.log("Access denied");
    }
  };
}
const access = accessLimiter();
access(); // Access granted
access(); // Access granted
access(); // Access granted
access(); // Access denied

// -------------------- Practice Problem 3 --------------------
// Write a function that stores a value and provides getter & setter

function createStorage(initial) {
  let value = initial;
  return {
    get: () => value,
    set: (newVal) => (value = newVal),
  };
}
const store = createStorage(10);
console.log(store.get()); // 10
store.set(50);
console.log(store.get()); // 50

// -------------------- Industry Best Practices --------------------

// 1. Use closures to encapsulate private data
//    - e.g., to create modules or hide implementation details

// 2. Be cautious with closures in loops
//    - Use let instead of var to avoid unexpected captures

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}

for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // 3, 3, 3 (not intended)
}

// 3. Avoid memory leaks
//    - Long-lived closures can keep unused variables in memory if not released

// 4. Understand scope to write secure code
//    - Reduces accidental access or overwrites