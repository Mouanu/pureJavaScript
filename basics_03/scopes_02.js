
// var c = 400

// scopes
{
    let a = 10
    const b = 20
   
}

// console.log(a)  // error
// console.log(b)  // error
//console.log(c)  // 30, right


// +++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)) // no error

function addone(num){
    return num+1;
}



// expression hole jinis take , variable er moto

addtwo(2) // error bolbe... eta declare e kora nei

// function k declare korar sathe varable a hold o kore diyechi
// hoisting
const addtwo = function(num){
    return num+2
}

addtwo(2) // here it will not show error

// node er bhitore global scope is different then
// windows er global scope theke
