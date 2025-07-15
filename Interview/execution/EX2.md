
📘 JavaScript Execution Context & Memory Phases – Notes
✅ What is an Execution Context?
An Execution Context (EC) is an environment in which JavaScript code is evaluated and executed.
It contains all the necessary information the JS engine needs to run your code.

👑 Types of Execution Contexts
Type	Description
Global Execution Context (GEC)	Created when JS starts execution. Only one per program.
Function Execution Context (FEC)	Created each time a function is invoked.
Eval Execution Context	Created when eval() is used. Rare and discouraged.

🧠 Phases of Execution Context
🔹 1. Memory Creation Phase (a.k.a. Creation or Hoisting Phase)
This happens before any code is actually run.

var variables are hoisted and initialized as undefined.

let & const variables are hoisted but left uninitialized (Temporal Dead Zone).

Function declarations are fully hoisted with their body.

The this keyword is initialized.

In functions, arguments object is created.

🔹 2. Code Execution Phase
Now, JS runs the code line-by-line using the memory set up earlier.

Variable values are assigned.

Function calls are made (creating new Function ECs).

Logic like loops, conditions, expressions are executed.

📦 Execution Context Structure
Every execution context has:

Variable Environment (Memory Phase)

Thread of Execution (Execution Phase)

Lexical Environment: Scope + outer reference

this binding

(in functions) arguments object

🧱 Execution Context Stack (Call Stack)
JavaScript uses a Call Stack to manage multiple execution contexts.

vbnet
Copy code
Global Execution Context (at bottom)
    ↓
Function EC 1
    ↓
Function EC 2
    ↓
... and so on
When a function finishes, its EC is popped off the stack.

✅ Example to Understand Flow
javascript
Copy code
function greet() {
  var message = "Hello, " + name;
  console.log(message);
}

var name = "Anushila";
greet();
💾 Memory Creation Phase:
greet → function

name → undefined

▶️ Execution Phase:
name = "Anushila"

greet() → creates Function EC:

message = "Hello, Anushila"

logs "Hello, Anushila"

⚠️ Temporal Dead Zone (TDZ)
The zone where let and const are hoisted but not initialized.

Accessing them before initialization results in a ReferenceError.

javascript
Copy code
console.log(a); // ❌ ReferenceError
let a = 10;