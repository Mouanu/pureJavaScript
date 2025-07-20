
function add(num1,num2) // parameters
{
    console.log(num1 + num2)
    return num1+num2
 
}

//const a = add(3,5) // arguments

function login(username = "mouli"){
    if(!username){
        console.log("Please enter a user name")
        return
    }
    return `${username} is logged in`
}

// nothing is passed to the login function
//console.log(login("arnab")) // undefined is logged in


// ...num1 = rest operator
function calcualteCartPrice(val1,val2,...num1){
        return num1
}
//console.log(calcualteCartPrice(200,300,400,67,9000,3243)) // [ 400, 67, 9000, 3243 ]


const user = {
    username: "Anushila",
    price: 199
}
    
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)