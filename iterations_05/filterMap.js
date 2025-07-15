// const colors = ["red", "green", "blue","pink","purple"];

// // forEach emni kichu return kore nah
// const values = colors.forEach( (item) => {
//    // console.log(item)

// })

// //console.log(values) // undefined

// const values1 = colors.forEach( (item) => {
//     console.log(item)
//     return item

// })

// console.log(values1) // undefined


// forEach kono value return kore nah

const myNums = [ 1,2,3,4,5,6,7,8,9,10]

// implicite return 
// condition
// const m = myNums.filter( (num) => num >4 )

const m = myNums.filter( (num) => {
     return num >4
} 
)
console.log(m)

// const a = myNums.map( (num) => num + 10)
// filter er opore true and false wala game cholche

const a = myNums
        .map( (num) => num * 10)
        .map((num) => num+1 )
        .filter((num) => num >= 40)

console.log(a)