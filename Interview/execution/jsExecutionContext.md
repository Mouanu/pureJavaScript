Great topic! Understanding **Execution Context** in JavaScript is **foundational** to mastering how the language works.

---

### 🧠 **There are 3 types of Execution Contexts in JavaScript:**

---

### 1. **Global Execution Context (GEC)**

👑 Created when the JS script first runs.

* There is **only one** GEC in any JS program.
* It creates:

  * The **global object** (`window` in browser, `global` in Node)
  * The `this` keyword
* Variables and functions declared outside of any function are in the GEC.

---

### 2. **Function Execution Context (FEC)**

📦 Created every time a function is invoked.

* Each function call creates a **new execution context**.
* It includes:

  * Arguments
  * Local variables
  * A reference to the outer environment
  * `this` binding (contextual)

👉 It’s **stacked on top** of the existing context (in the **Call Stack**).

---

### 3. **Eval Execution Context** (rarely used)

⚠️ Created by running code inside the `eval()` function.

* Not commonly used and **discouraged** for security/performance reasons.
* It behaves similarly to global or function contexts depending on where it's called.

---

### 📊 Visual Summary:

```
Global EC
│
├── Function EC 1
│   └── Function EC 2
│       └── ...
└── (maybe) Eval EC
```

---

Let me know if you want a visual diagram or a real code example to see these contexts in action!


🔥 Summary: Memory + Execution Context
✅ Memory Creation Phase (before code runs):

var → undefined

let/const → memory reserved (Temporal Dead Zone)

Function declarations hoisted

this + arguments set

✅ Code Execution Phase:

Actual values assigned

Code runs line-by-line

Functions invoked → new execution contexts created