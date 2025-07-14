
const arr1 = ["freer","bkvnnkdf","bgjk"]

const arr2 = [ "vfkdbvf","fberkbvkdvfvnj"]

// arr1.push(arr2) // push a original array k change kore day

// console.log(arr1) // [ 'freer', 'bkvnnkdf', 'bgjk', [ 'vfkdbvf', 'fberkbvkdvfvnj' ] ]

// const t = arr1.concat(arr2) // original arr1 change hoy na , returns a new array
// limitation of concat
        // [   ekhane sudhu 2 jon k add kora jay]

// console.log(t) [ 'freer', 'bkvnnkdf', 'bgjk', 'vfkdbvf', 'fberkbvkdvfvnj' ]


// ****************************
// spread operator

// Advantage of spread operator --> multiple jinis k add kora jay [...arr1, ...arr2, ...arr3,...arr4] like this
const arr3 = [...arr1, ...arr2]

//console.log(arr3) ///[ 'freer', 'bkvnnkdf', 'bgjk', 'vfkdbvf', 'fberkbvkdvfvnj' ]

const arr4 = [1,2,3,4,[2,3,4],9,[1,2,[4,5,8]]]

const usable = arr4.flat(Infinity) // it will flat the array

// console.log(usable)


console.log(Array.isArray("feiufnikew")) // false , no it is  not an array

// Array.from will create an array from the given one
console.log(Array.from("feiufnikew"))  // [
//   'f', 'e', 'i', 'u',
//   'f', 'n', 'i', 'k',
//   'e', 'w'
// ]


// INTERING
console.log(Array.from({name:"Mouli"})) // [], return empty array bcz it can't directly change the thing


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]
