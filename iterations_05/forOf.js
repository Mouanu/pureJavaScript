
// for of 

// map a use koro for of
// array te for of use koro
// object a for of use koro nah  // N0000

const arr = [1,2,23,4,5,6,78]

// for (const element of arr) {
//     console.log(element)    
// }

// const c = "jenlngekrngkegr;"

// for (const element of c) {
//     console.log(element)
// }


// Maps
// key value pairs, remembering the original insertion order of the keys
// also stores unique values
/*//    map
        {
            "IN" => "India",
            "USA" => "United States of America".
            "Fr" => "France"
        }
*/
const map  = new Map()

map.set('IN','India')
map.set('USA',"United States of America")
map.set("Fr","France")

console.log(map)

// for (const element of map) {
//     console.log(element)
//     /*
//         ['IN','India'],
//         ['USA',"United States of America"]
//         ["Fr","France"]
//     */
// }

// for (const [key,value] of map) {
//     console.log(key , ":- ",value)
    
// }


const  myobj = {
    'g1':"a",
    "g2": "b"
}

// the below line will show error
// for (const [key,value] of myobj) {
//     // error
// }


// for in map

for (const key in map) {
   console.log(key)
}
// eta cholbe nah , bcz map is not iterable??
// Don't use for in loop in map


