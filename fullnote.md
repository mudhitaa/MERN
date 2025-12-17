# JavaScript – Complete Detailed Theory Notes (Beginner to Advanced)

---

## 1. Introduction to JavaScript

JavaScript is a high-level, interpreted programming language used to create dynamic and interactive content on websites. Unlike HTML (structure) and CSS (style), JavaScript adds **logic and behavior** to applications.

Originally, JavaScript was designed to run only inside web browsers. With the introduction of **Node.js**, JavaScript can now run on servers, making it a full-stack language.

### Key Characteristics

* **Interpreted**: Code is executed line by line, not compiled beforehand.
* **Dynamically Typed**: Variable types are determined at runtime.
* **Single-threaded**: Executes one task at a time.
* **Non-blocking**: Long-running operations are handled asynchronously using the event loop.

---

## 2. Variables and Constants

Variables are memory locations used to store data values that can be used and modified during program execution.

### var

* Introduced in older JavaScript versions.
* Has **function scope** or **global scope**.
* Allows **re-declaration** and **re-assignment**, which can cause bugs.
* Hoisted with an initial value of `undefined`.

Because of unpredictable behavior, `var` is avoided in modern JavaScript.

### let

* Introduced in ES6.
* Has **block scope**, meaning it exists only within `{}`.
* Can be re-assigned but cannot be re-declared in the same scope.
* Hoisted but placed in the **Temporal Dead Zone (TDZ)** until initialized.

### const

* Also block-scoped.
* Must be initialized at declaration.
* Cannot be re-assigned or re-declared.
* Used for constants and fixed references.

---

## 3. Data Types

JavaScript data types define the type of value a variable can hold.

### Primitive Data Types

Primitive types store **single, immutable values**.

* **String**: Sequence of characters used for text.
* **Number**: Includes integers, decimals, NaN, and Infinity.
* **Boolean**: Represents true or false.
* **Null**: Explicitly represents an empty value.
* **Undefined**: A variable declared but not assigned.
* **Symbol**: Used to create unique identifiers.

### Non-Primitive Data Types

Non-primitive types store **references to values**.

* **Object**: Collection of key–value pairs.
* **Array**: Ordered list of values.
* **Function**: Reusable block of code.

---

## 4. Operators

Operators perform operations on variables and values.

### Arithmetic Operators

Used for mathematical calculations such as addition, subtraction, multiplication, division, modulus, and exponentiation.

### Assignment Operators

Used to assign values to variables and update them.

### Comparison Operators

Compare two values and return a boolean result.

* `==` compares value only (type conversion happens).
* `===` compares both value and data type.

### Logical Operators

Used to combine conditions.

* AND (`&&`): All conditions must be true.
* OR (`||`): At least one condition must be true.
* NOT (`!`): Reverses the result.

### Ternary Operator

A shorthand for if–else conditions, making code shorter and cleaner.

### Nullish Coalescing Operator (`??`)

Returns a default value only when the left-hand side is `null` or `undefined`, not for other falsy values.

---

## 5. Functions

Functions are reusable blocks of code designed to perform a specific task.

### Function Declaration

Defined using the `function` keyword. These functions are fully hoisted, meaning they can be called before their definition.

### Function Expression

Stored inside variables. These are not fully hoisted and cannot be called before initialization.

### Arrow Functions

Introduced in ES6. They provide shorter syntax and do not have their own `this`, making them useful in callbacks and functional programming.

---

## 6. Scope and Lexical Scope

Scope determines the accessibility of variables in different parts of the program.

### Types of Scope

* **Global Scope**: Variables accessible everywhere.
* **Block Scope**: Variables declared using `let` and `const` inside `{}`.
* **Function Scope**: Variables declared with `var` inside a function.

### Lexical Scope

JavaScript uses lexical scoping, meaning inner functions can access variables defined in outer functions. Scope resolution happens from inner to outer (scope chaining).

---

## 7. Closures 🔥

A closure is created when an inner function retains access to variables of its outer function even after the outer function has finished execution.

### Why Closures Are Important

* Maintain private variables
* Preserve state between function calls
* Used heavily in callbacks, event handlers, and Node.js

---

## 8. Hoisting 🔥

Hoisting is JavaScript behavior where variable and function declarations are moved to the top of their scope during compilation.

* `var`: Hoisted and initialized with `undefined`.
* `let` and `const`: Hoisted but inaccessible before initialization (TDZ).
* Function declarations: Fully hoisted.

---

## 9. Arrays

Arrays are used to store multiple values in a single variable.

### Common Array Methods

* `push()` / `pop()` – Add or remove from end
* `shift()` / `unshift()` – Add or remove from beginning
* `includes()` – Check existence of value

### Higher-Order Array Methods

* `map()` – Transforms each element
* `filter()` – Selects elements based on condition
* `reduce()` – Combines array into single value
* `find()` – Returns first matching element

---

## 10. Objects

Objects represent real-world entities using key–value pairs.

### Object Destructuring

Allows extracting values from objects into separate variables.

### Spread Operator

Used to copy or merge objects and arrays (shallow copy).

---

## 11. Control Statements

Control statements decide the flow of execution.

### Conditional Statements

* if–else
* switch-case

### Truthy and Falsy Values

Falsy values include `false`, `0`, `null`, `undefined`, `NaN`, and empty string.

---

## 12. Loops

Loops allow repeated execution of code.

* `for` loop – Used when number of iterations is known
* `while` loop – Condition-based loop
* `do–while` loop – Executes at least once
* `for...of` – Iterates over arrays

---

## 13. Callbacks

A callback is a function passed as an argument to another function and executed later. Callbacks enable asynchronous programming in JavaScript.

---

## 14. Asynchronous JavaScript

### Synchronous Execution

Tasks are executed one after another, blocking execution.

### Asynchronous Execution

Long-running tasks are handled separately without blocking the main thread.

Examples include timers, API calls, and file operations.

---

## 15. Promises 🔥

Promises are objects that represent the future completion or failure of asynchronous operations.

### Promise States

* Pending
* Fulfilled
* Rejected

Promises allow cleaner async code and chaining of operations.

---

## 16. Async / Await 🔥

Async/Await provides a simpler syntax over promises.

* `async` functions always return promises.
* `await` pauses execution until promise resolves.
* Errors are handled using `try–catch`.

---

## 17. Event Loop 🔥

The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded.

It manages the call stack, callback queue, and microtask queue.

---

## 18. Object-Oriented Programming (OOP)

### Classes

Classes are blueprints used to create objects.

### Constructor

Used to initialize object properties.

### Inheritance

Allows a class to acquire properties and methods of another class using `extends`.

### Polymorphism

Method overriding allows child classes to modify parent behavior.

### Static Methods

Belong to the class itself, not instances.

---

## 19. Modules

Modules help organize code into reusable files.

### CommonJS (ES5)

Uses `require()` and `module.exports`.

### ES6 Modules

Uses `import` and `export` with named and default exports.

---

## 20. Recursion

Recursion occurs when a function calls itself until a base condition is met.

Used when looping is not suitable.

---

## 21. JavaScript for Node.js

JavaScript knowledge is essential for Node.js because Node relies heavily on:

* Asynchronous programming
* Event loop
* Callbacks, Promises, Async/Await
* Modules and closures

---

✅ These detailed theory notes are suitable for **Word documents, exams, and Node.js preparation**.
