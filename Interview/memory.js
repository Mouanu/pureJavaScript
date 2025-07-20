
// Stack(Primitive)(copy) , Heap(Non-Primitive)(change korle original value te change hobe)

// let myName = "Anushila"

// let nick = myName 

// console.log(nick) // Anushila

// nick = "mouli"
// console.log(nick) // mouli
// console.log(myName) // Anushila

let userOne = {
    email :"anu@gmail.com",
    upi: "regerg"
}

let userTwo = userOne

userTwo.email ="mouli@gmail.com"
console.log(userTwo.email)
console.log(userOne.email)