
// Object Singleton (Constructor)

const user = new Object()

user.id ="123abc"
user.name = "Anu"
user.isLoggedin = false

//console.log(user) // {}

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Anushila",
            lastname: "Biswas"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.lastname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = {5:"a",6:"b"}

const obj3 = { obj1, obj2}

// console.log(obj3)
/*
{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

*/
// ekhane sob value obj1 er modhhe store hobe Na
// obj1 will not get modified
// const obj4 = Object.assign({},obj1,obj2,obj5)
// console.log(obj4)

/*
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
*/

// here obj1 will be storing all the values of obj1,obj2,obj3
// obj1 will get modified

const obj4 = Object.assign(obj1,obj2,obj5)
// console.log(obj4)
// console.log(obj1) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(obj4 === obj1) // true


// spread operator

const obj6 = {...obj2,...obj5}
// console.log(obj6)


const users = [
    {
        id:1,
        email:"bdbsk@gmail.com"
    },
    {
        id:1,
        email:"2bdbsk@gmail.com"
    },
    {
        id:1,
        email:"bdbsk@gmail.com"
    },
]

// console.log(users[1].email)

console.log(Object.keys(user)) // [ 'id', 'name', 'isLoggedin' ]
// Object will return keys

console.log(Object.values(user)) // [ '123abc', 'Anu', false ]
// the above one will also return array

console.log(Object.entries(user)) // array er vitore array
/*
key ,val
    [ [ 'id', '123abc' ], [ 'name', 'Anu' ], [ 'isLoggedin', false ] ]
*/

console.log(user.hasOwnProperty("name")) // true
console.log(user.hasOwnProperty("vfebwfberlnfl")) // false