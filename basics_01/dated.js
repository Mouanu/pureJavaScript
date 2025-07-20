
let myDate = new Date() // Date is an object

// console.log(typeof myDate)  // object
// console.log(myDate)           //2025-07-14T06:20:36.732Z
// console.log(myDate.toString()) //Mon Jul 14 2025 11:50:36 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())  // Mon Jul 14 2025
// console.log(myDate.toLocaleString()) // 14/7/2025, 11:50:36 am


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()) // Mon Jan 23 2023

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString()) // 23/1/2023, 5:03:00 am


// let myCreatedDate = new Date("2023-01-14") // yy-mm-dd
 let myCreatedDate = new Date("01-14-2023") // mm-dd-yy
// console.log(myCreatedDate.toLocaleString())  //14/1/2023, 5:30:00 am


let myTimesStamp = Date.now() // 1752475375054 (miliseconds)
//console.log(myTimesStamp) // miliseconds from 1970's 1st Jan


// 1673634600000, time in miliseconds
//console.log(myCreatedDate.getTime())  // date is an object
// .getTime() function diye ami myCreatedDate jokhon create hoyeche .. 
// exact oi time theke time nebo


// miliseconds er time k seconds a convert korbo
// But HOW?????
// console.log(Date.now()) // 1752475479230 (miliseconds)
// console.log(Date.now()/1000) // 1752475593.368 , decimal values .. it is a problem

// how to fix it??
console.log(Math.floor(Date.now()/1000))  // 1752475658 seconds

 let newDate = new Date() // object
// console.log(newDate.getDay()) // 1 (Monday)
// console.log(newDate.getMonth())  // 0 theke start hochhe tai 6, nahole basically eta July (7 TH MONTH)
// console.log(newDate.getFullYear()) // 2025

//console.log(newDate.getMonth() +1) // now 7


// `${newDate.getDay()} and the day`

newDate.toLocaleString('default',{
    weekday: "long"
})
