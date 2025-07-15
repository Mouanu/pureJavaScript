
const user = {
    username: "Mou",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcoms to the website`)
        console.log(this)
    }

}

// user.welcomeMessage() // Mou , Welcoms to the website

// user.username = "Anu"

// user.welcomeMessage() // Anu , Welcoms to the website

console.log(this) // {} , node environment er modhhe this refer korche global context k ekhane
// but global ekhane kono context e nei, tai empty object return korche

// Browser er global object holo Window


function one(){
    let username = "Anu"
    console.log(this) // onek value 
      console.log(this.username) // undefined
    // function er bhitore
}

//one()

// const chai = function(){
//         let username = "Anu"
//         console.log(this.username) // undefined
// }


const chai = () => {
        let username = "Anu"
        console.log(this.username) // undefined
        console.log(this)  // {}
}
chai() 

// Arrow function er bhetore this context use kora jay nah
// ekhane this context kaoke refer kore na


// const addtwo = (num1,num2) =>{
//     return num1+num2
// }


// Implicit return ==> {,} sorate hobe r ek e line a likhte hobe without return
// return emni tei kore debe
//const addtwo = (num1,num2) => num1+num2

// parenthesis a wrap korle return keyword likhte hobe nah
// {} a wrap korte return korte hobe
// const addtwo = (num1,num2) => (num1+num2)


// const addtwo = (num1,num2) => {username:"amu"} // undefined -->bcz erokom bhabe object k return e korte parbo nah

const addtwo = (num1,num2) => ({username:"amu"}) // object k return korte hole parenthesis a wrap korte e hobe

console.log(addtwo(2,4)) // 6
