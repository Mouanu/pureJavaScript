
const arr = [0,1,2,3,4,5, true,"Anushila"]

// array er bhitore prototype thake


const myarr = new Array(1,2,3,4,5)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(9) // samne add hoye jay-->9,1,2,3,4,5
// myarr.shift() // samne theke value remove hoye jay ==> 1,2,3,4,5

// console.log(myarr.includes(9)) // false
// console.log(myarr.indexOf(9)) // -1 (it is not present in the array)
// console.log(myarr.indexOf(3))// 2


// const newarr = myarr.join()  // join er pore string a convert hoye jay

// console.log(newarr) // output : 1,2,3,4,5 (this is a string)
// console.log(typeof newarr) // String

//console.log(myarr) // [1,2,3,4,5] ==> this is an array




//**************    INTERVIEW Questions      *************************************


console.log("A ", myarr)
const myn1 = myarr.slice(1,3) // 3 index exclusive (1 theke start hobe r 2 porjonto jabe)
console.log(myn1) // [ 2, 3 ]
console.log("Original Array after slicing:  ",myarr) // [ 1, 2, 3, 4, 5 ]


const myn2 = myarr.splice(1,3)
console.log("Original Array after splicing : ",myarr) //  [ 1, 5 ]
console.log(myn2) // [ 2, 3, 4 ]

// Splice manupuulates the original array
// slice does not manupulate the original array





// *******************************************************************************



// Array te shallow copy hoy

// shallow copy mane sharing the same reference point

// shallow copy of an object is a copy whose properties
// share the same references (point to the same underlying value)
// shallow copy mane ja change korbo , ta original array teo save hobe

// Deep Copy

// A deep copy of an object is a copy whose
// properties do not share the same reference

