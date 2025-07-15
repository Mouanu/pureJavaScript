
const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( (acc, val) => {
//         return acc + val
// }, 5)

const myTotal = myNums.reduce( (acc,curr ) => acc+curr ,0)

console.log(myTotal)

const cartObject = [
  { name: "Laptop",  price: 55000 },
  { name: "Mouse",   price: 799   },
  { name: "Keyboard", price: 1499 },
  { name: "Headset",  price: 2499 },
  { name: "Webcam",   price: 1899 }
];

 const p = cartObject.reduce((acc ,item) => (acc + item.price), 0)

 console.log(p)
