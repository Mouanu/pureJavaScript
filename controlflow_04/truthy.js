
const userEmail = []

if(userEmail){
    console.log("Got User Email") // eta print hobe
} else {
    console.log("Don't have user email")

}

// empty array check
if(userEmail.length===0){
    console.log("Empty Array")
}

const empObj = {}
// check if an Object is empty or not
if((Object.keys(empObj)).length===0){
    console.log("Object is empty")
}

// falsy value

// false, 0, -0, BigInt 0n, "" , null,  undefined , NAN

//  Truthy values
// function(){} ==> empty function is also truthy
// "0" , "false" ," " , [], {}, function(){}



// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10 //5

// val1 = null ?? 10 //10

//val1 = undefined ?? 15 // 15

val1 = null ?? 10 ?? 15 // 10


console.log(val1) 



// ******** Ternery *********

const i = 100

i >= 80 ? console.log("Greater than equal to 80"): console.log("less than 80")

