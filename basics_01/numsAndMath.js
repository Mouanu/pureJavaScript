
const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance) //[Number: 100]
// console.log(typeof balance) // object

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 23.5678

// toPrecision er modhhe (1 theke 21 number e rakhte parbo)
// console.log(otherNumber.toPrecision(3)) // 23.6

// const another= 123.8765
// console.log(another.toPrecision(3)) // 124
// console.log(another.toPrecision(4)) //123.9

// const ann = 1123.87654
// console.log(ann.toPrecision(3)) // 1.12e+3

// const hund = 1000000
// console.log(hund.toLocaleString('en-IN')) 



//+++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math) // Object [Math] {}
// console.log(Math.abs(-7))
// console.log(Math.round(4.3)) // 4
// console.log(Math.round(4.6)) // 5
// console.log(Math.round(4.5)) // 5

// console.log(Math.ceil(4.3))  // 5
// console.log(Math.floor(4.6)) //4

// console.log(Math.random()) // all time 0 r 1 er modhhe asbe , 0 hote pare , abar 1 o hote pare

// console.log((Math.random()*10) + 1) // + 1 add korchi bcz 0.041 asle seta l 0.141 korbe tai .. after multiplication
// it will be 1.41


console.log(Math.random()) // all time 0 and 1 er modhhe value asbe
console.log(Math.floor(Math.random()*10) + 1) // minimum value 1 hbe e, 1 and 9 er modhhe value debe

// let Math.random() = 0.04, Math.random()*10 = 0.4 , Math.floor(0.4) = 0, so jodi minimum chai then add 1 to it

const min = 10
const max = 20

// (max - min)  korchi bcz ai range er modhhe value chai
console.log( Math.floor(Math.random() * (max - min + 1)) + min ) 



