
// forEach kono value return kore nah

const colors = ["red", "green", "blue","pink","purple"];

// call Back function er nam hoy na
// colors.forEach( (item) => {
//     console.log(item)
// })


function printMe(item,index,arr){
    console.log(item);
}

colors.forEach(printMe) // refernce dao
// do not execute


const students = [
  {
    name: "Anushila",
    age: 21,
    course: "CSE"
  },
  {
    name: "Rahul",
    age: 22,
    course: "ECE"
  },
  {
    name: "Priya",
    age: 20,
    course: "IT"
  }
];


students.forEach((items) => {
    console.log(items.name)
    console.log(items.age)
    console.log(items.course)
})
