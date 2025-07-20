
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



// INTERING
console.log(Array.from({name:"Mouli"})) // [], return empty array bcz it can't directly change the thing
