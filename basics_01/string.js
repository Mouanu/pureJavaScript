
const names =" Anushila"

//console.log(`my name is ${names}`)


// another way to declare string

const n = new String("sdw-guihi") // key : value pairs
console.log(typeof n)// object
//console.log(n[0]) // s (key: value pair)

// prototype access
// console.log(n.__proto__) // {}

console.log(n.length)

// toUpperCase() --> is a prototype function
// console.log(n.toUpperCase()) // eta main string k change kore na
// tar mane shallow copy kore , call by value actually

// toUpperCase( ) hasn't changed the original n
//console.log(n)

// console.log(n.charAt(2)) // w, index 2 te kon character ache
// console.log(n.indexOf('w')) //2

const newString = n.substring(0,3)
// substring er modhhe negative values nile , substring seta k ignore korbe
// r 0 theke start korbe
// console.log(newString)

// const ast = n.slice(-4) // -9 length theke 4 porjonto
// console.log(ast)

// const a = "fegrgerger"
// console.log(typeof a)

// const he = "        krlgmtbt    "
// console.log(he)
// console.log(he.trim())

const url = "https://dsvsd.com/vfwr%20fwoirgrn nvown"
console.log(url.replace('%20','-'))

// console.log(url.includes("anu")) // false

const s = "ferer-ver-verg-vev"
console.log(s.split('-'))