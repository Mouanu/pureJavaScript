
// Data ki kore memory te store hoy
// r ki kore data k amra access korte parbo
// taropore base kore -->
// 1] callByValue and 2] callByReference 
// opore depend kore


// call By value
// call by refrence




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// datatypes 

// 1] primitive -> 7 categories 
// 2] nonPrimitive or Reference type

// 1] primitive Data type
// (callByvalue) --> copy hoy,copy te changes hoy, not on the main thing
// null er type object (This is called Deep copy)

//  7 types: i] String, ii] Number, iii] Boolean, iv] null, v] undefined, vi] Symbol(uniqueness,complex frontend thing) , vii] BigInt (very big number)


// 2] Non Primitive or Reference type (er mane Shallow Copy)
// Array, Objects, Functions typeof these are object
// type of Non Primitive is object
// function as variable

const myfun = function(){
    console.log("Function is a Non primitive datatype, reference type")
}
// myfun()
 console.log(typeof myfun)  // function --> this is actually object function

 console.log(typeof null) // object

const id = Symbol('123') // unique
const anotherId = Symbol('123') // unique


//console.log(id === anotherId) // false 


// this is how we declare bigInt by adding n to the last
// const bigNumber = 987654323456789765456788765n




// **********************************************************
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// **************************************************
// ------------------------------------------------------------






/*
JavaScript is **dynamically typed** ✅

---

## 🔍 What does "dynamically typed" mean?

In **dynamically typed** languages:

* **You don’t need to declare variable types** explicitly.
* The **type is determined at runtime**, based on the value assigned.
* You can even change the type of a variable later.

---

### 🧪 Example:

```javascript
let x = 5;       // x is a number
x = "hello";     // now x is a string
```

> No error — JavaScript allows changing types of variables at runtime.

---

## ❌ Statically typed (not JS)

In **statically typed** languages (like Java, C++, or TypeScript):

* You must **define the type** at compile time.
* You **cannot assign a value of another type** later.

```java
int x = 5;
x = "hello"; // ❌ Compile-time error in Java
```

---

## ✅ Why is JavaScript dynamically typed?

* It's designed for **flexibility** and **rapid development**
* It prioritizes **developer speed** over **type safety**
* Type checking happens **at runtime**, not during compilation

---

## 🤖 Bonus: What if you want types in JS?

You can use **TypeScript**, which is a **statically typed superset** of JavaScript.

```typescript
let x: number = 5;
x = "hello"; // ❌ TypeScript error
```

---

### 🧠 Summary:

| Feature                  | JavaScript            |
| ------------------------ | --------------------- |
| Typing                   | Dynamically typed ✅   |
| Type checked at          | Runtime               |
| Can change variable type | Yes                   |
| Type declarations        | Optional / not needed |

Let me know if you want examples comparing JavaScript and TypeScript!


*/


