

// Singleton --> made by any constructor
// Object.create() (This is Singleton)



// object literals
// literal --> No singleton
// key k interpret kore string er moto kore
// type of key is string
const mysym = Symbol("key1")
const nextSym = Symbol("key2")

const user = {
    name:"Anu",
    mysym:"mykey1",
    [nextSym]: "mykey2",
    "full name":"Anushila Biswas", // we can't access it through .
    age:20
}

//console.log(user.name) // Anu
// console.log(user[name]) // IT WILL SHOW ERROR

// console.log(user["name"]) // Anu,  now it is correct

// console.log(user["full name"]) // Anushila Biswas
// console.log(user.mysym) //mykey1 , mysym is not used as key
// console.log(typeof user.mysym) // lol!! it is a String--> not a Symbol
// console.log(user[nextSym]) //mykey2
// console.log(typeof nextSym)

// object Freezing

user.name = "Mouli"
// Object.freeze(user)
// user.name = "Moulirrrrrrrrrrrrrrrr" // It won't change a thing
// console.log(user) // [Symbol(key2)]: 'mykey2'


user.greeting = function(){
    console.log('Hello JS  User')
}

//console.log(user.greeting) // [Function (anonymous)]

console.log(user.greeting()) 
/*
GBREBGBKEG
undefined

*/


user.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`)
}

console.log(user.greeting2()) 















/********  Symbol ************* */

// INTERVIEW
// USE Symbol as a key
// use symbol as an object key
// const mysym = Symbol("key1")