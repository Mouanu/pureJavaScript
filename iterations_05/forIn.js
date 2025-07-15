
// for in

// for in can be used in objects
// for in can be used in array
// but for in can not be used in map

const student = {
  // primitive values
  name: "Anushila Biswas",
  age: 21,
  isGraduate: false,

  // array value
  skills: ["JavaScript", "React", "Node.js"],

  // nested object
  address: {
    city: "Kolkata",
    country: "India",
    pin: 700001
  },

  // method (function value)
  greet() {
    console.log(`Hi, I m ${this.name} 👋`);
  }
};


// object er jonno for in loop

// for (const key in student) {
//     // console.log(key) // sob keys chole asbe
//     console.log(key, ": - ", student[key])
// }


const colors = ["red", "green", "blue"];

for (const key in colors) {
   //console.log(key) // 0,1,2
   console.log(colors[key])
}