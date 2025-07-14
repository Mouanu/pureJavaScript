
"use strict"; // treat all JS code as newer version

/*
✅ Why use "use strict"?
Here are main reasons with simple examples:

1. Avoids accidental global variables
javascript
Copy code
"use strict";

x = 5; // ❌ Error: x is not defined
Without strict mode, x would become a global variable even if you didn’t declare it. Strict mode forces you to declare variables (let, const, or var).

*/



// alert( 3+ 3) // will show error in here... but browser a giye sob thik hobe
// as we are using node.js not browser
// jodi browser a kortam tahole kono error asto nah

// console.log(6+4) 
// console.log("Anu")

// let name = "Anu"
// let age = 20

// datatypes


// 1] primitive datatype

// number => 2 to power 53
// bigint --> for huge huge numbers --> stock market type of things
// string => ""
// boolean => true/false
// null => standalone value-> empty thing, let state=null
// undefined , let a ;undefined

// null mane khali(empty)
// symbol =>(react), uniqueness,figma



// object
console.log(typeof "aaffd")
// lol !!!!!!
console.log(typeof null) // object , haha lol!!!
console.log(typeof undefined) // undefined