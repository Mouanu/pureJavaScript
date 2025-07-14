
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
console.log(login("arnab")) // undefined is logged in





    
