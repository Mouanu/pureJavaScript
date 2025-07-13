
// console.log("2" > 1) // true "2" ke number 2 te convert kore , tarpor compare kore
// console.log("02" > 1) // true

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true

// why the above thing happened??

// **********
// the reason is that an equality check== and
// comparisons <,>, >=,<= work differently
// comparisons convert null to a number , treating it as 0
// that's why (3) null>=0 true and null>0 is false
// ***********


// console.log(undefined > 0) // false
// console.log(undefined == 0) // false
// console.log(undefined >= 0) // false

// === , strict check
// sudhu value k check kore nah, tarsathe datatype k o check kore

console.log("2" == 2) // true --> bcz ekhane conversion hoy
console.log("2" === 2) // false --> bccz ekhane conversion hoy na
