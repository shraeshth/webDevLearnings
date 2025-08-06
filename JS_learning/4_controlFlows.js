// Chapter 4: Control Flow & Conditionals
// Control flow determines the order in which code executes
// Conditional statements execute code blocks based on boolean expressions

// -------------------- if / else if / else --------------------
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// -------------------- Truthy / Falsy --------------------
// JavaScript treats some values as false in conditions: false, 0, "", null, undefined, NaN

if ("hello") {
  console.log("This is truthy");
}

if (0) {
  console.log("Won't run, because 0 is falsy");
}

// -------------------- switch --------------------
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Midweek days");
    break;
  case "Friday":
    console.log("End of the work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Not a valid day");
}

// -------------------- Ternary Operator --------------------
// Shorthand for simple if-else

let age = 16;
let access = age >= 18 ? "Allowed" : "Denied";
console.log("Access:", access);

// -------------------- Logical Operators in Conditions --------------------
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Welcome, admin!");
} else if (isLoggedIn) {
  console.log("Welcome, user!");
} else {
  console.log("Please log in.");
}

// -------------------- Guard Clauses --------------------
function printName(user) {
  if (!user) return; // exit early if user is falsy
  console.log("User name:", user.name);
}

printName({ name: "Riya" }); // 
printName(null); // nothing happens

// discount calculator example
function getDiscount(isMember, total) {
  if (!isMember) return 0;
  if (total > 1000) return 20;
  return 10;
}

console.log(getDiscount(true, 1200)); // 20
console.log(getDiscount(true, 800)); // 10
console.log(getDiscount(false, 800)); // 0

// -------------------- Industry Best Practices --------------------

// 1. Always handle the default case in switch statements
//    - Prevents bugs when input doesn’t match any known case

// 2. Avoid deeply nested if-else chains
//    - Refactor using guard clauses, early returns, or switch/case

// 3. Use truthy/falsy checks cautiously
//    - Be explicit when checking for null/undefined
//    - Example: use value !== undefined instead of if (value)

// 4. Favor readability over compactness
//    - Don't sacrifice clarity by combining too many conditions in one line

// 5. Use optional chaining and nullish coalescing for safe property access
//    - e.g., user?.profile?.email ?? "No email"