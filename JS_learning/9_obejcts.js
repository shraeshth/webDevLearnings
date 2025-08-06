// Chapter 8: Objects
// Objects in JavaScript are collections of key-value pairs.
// They are used to model real-world entities and store structured data.

const student = {
  name: "Ravi",
  age: 21,
  isEnrolled: true,
};

// -------------------- Key-Value Structure --------------------
// Keys are strings (even if written like identifiers or numbers).
// Values can be any data type: string, number, array, object, function, etc.

console.log(student["name"]); // Ravi
console.log(student.age); // 21

// -------------------- Dot vs Bracket Notation --------------------
// Use dot notation when the key is a valid identifier and fixed.
// Use bracket notation for dynamic or multi-word keys.

student["full name"] = "Ravi Kumar"; // ✅
student.course = "JavaScript"; // ✅

const key = "marks";
student[key] = 95; // Computed Property

// -------------------- Nesting and Deep Access --------------------
const user = {
  name: "Amit",
  address: {
    city: "Delhi",
    pincode: 110001,
  },
};

console.log(user.address.city); // Delhi

// -------------------- Object Destructuring --------------------
const { name, age } = student;

const {
  address: { city },
} = user;

console.log(name); // Ravi
console.log(city); // Delhi

// -------------------- Looping Through Objects --------------------
for (let key in student) {
  console.log(key, student[key]);
}

console.log(Object.keys(student)); // ["name", "age", "isEnrolled", "full name", "course", "marks"]
console.log(Object.values(student)); // ["Ravi", 21, true, "Ravi Kumar", "JavaScript", 95]
console.log(Object.entries(student)); // [["name", "Ravi"], ["age", 21], ...]

// -------------------- Copying Objects --------------------
// Shallow Copy
const newStudent1 = { ...student };
const newStudent2 = Object.assign({}, student);

// Deep Copy (only works for pure JSON-safe values)
const deepCopyUser = JSON.parse(JSON.stringify(user));

// -------------------- Optional Chaining --------------------
// Prevents runtime errors when accessing deeply nested properties
console.log(user?.address?.city); // Delhi
console.log(user?.profile?.email); // undefined (no error)

// -------------------- Computed Properties --------------------
// You can use variables as keys
let dynamicKey = "score";
const report = {
  [dynamicKey]: 89,
};

console.log(report.score); // 89

// -------------------- Common Confusions --------------------

// 1. Shallow copy (spread or Object.assign) copies only first level
// 2. Deep copy using JSON.parse(JSON.stringify()) ignores functions, undefined, Date, etc.
// 3. for-in loops also include inherited properties — filter with hasOwnProperty if needed
// 4. delete obj.key removes the property
// 5. Spread operator ≠ deep clone

// -------------------- Practice Zone --------------------
// 1. Create an object for a book (title, author, price)
const book = {
  title: "Atomic Habits",
  author: "James Clear",
  price: 499,
};

// 2. Access properties using both dot and bracket
console.log(book.title); // Atomic Habits
console.log(book["author"]); // James Clear

// 3. Write a nested object (user with address and location)
const customer = {
  name: "Sara",
  address: {
    city: "Pune",
    location: {
      lat: 18.5,
      long: 73.8,
    },
  },
};

// 4. Destructure name and age from a student object
const student2 = { name: "Aarav", age: 23 };
const { name: studentName, age: studentAge } = student2;

// 5. Loop through keys and values of an object
for (let key in book) {
  console.log(key, book[key]);
}

// 6. Convert object to array using Object.entries()
console.log(Object.entries(book));

// 7. Copy an object using spread operator
const bookCopy = { ...book };

// 8. Create a deep copy of an object with nested structure
const deepCopyCustomer = JSON.parse(JSON.stringify(customer));

// 9. Use optional chaining to safely access deep values
console.log(customer?.address?.location?.lat);

// 10. Use a variable as a key using computed properties
let dynamic = "ratings";
const feedback = {
  [dynamic]: 4.8,
};

// -------------------- Industry Best Practices --------------------

// - Use const for objects unless you intend to reassign
// - Always use optional chaining for deeply nested property access
// - Avoid using for-in without hasOwnProperty check on unknown objects
// - Use spread operator for shallow copies and immutability patterns
// - Use Object.entries/Object.keys/Object.values with array methods for better control
// - Deep clone only when necessary — be mindful of performance
// - Structure state clearly in nested objects to model real-world systems
// - Prefer concise method syntax: sayHello() {} instead of sayHello: function() {}
// - Avoid overly deep nesting — flatten where possible for readability