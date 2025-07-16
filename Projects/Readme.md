
# Project 1

## Color change on click
```javascript

const buttons = document.querySelectorAll(".button")

 const body = document.querySelector("body")

 buttons.forEach((item)=>{
  
  item.addEventListener("click",function(event){
      
      if(event.target.id === "grey"){
        document.body.style.backgroundColor = event.target.id 
      }
      if(event.target.id === "white"){
        document.body.style.backgroundColor = event.target.id 
      }
      if(event.target.id === "yellow"){
        document.body.style.backgroundColor = event.target.id 
      }
      if(event.target.id === "blue"){
        body.style.backgroundColor = event.target.id 
      }
      if(event.target.id === "pink"){
        body.style.backgroundColor = event.target.id 
      }
  })
 })

```

# Project 2

## BMI Calculator

```javascript


const form = document.querySelector("form")

// form jokhon submit hoy tokhon post type a submit hoy 
// ba get type a submit hoy

// stop the default action of the form


form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value)

  const weight = parseInt(document.querySelector("#weight").value)

  const results = document.querySelector("#results")

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  }else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  }
  else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2)

   results.innerHTML = `<span>${bmi}</span>`
  }
  
});

```

# Project 3

## Local Time

```javascript

const clock = document.getElementById("clock")

let date = new Date()
console.log(date.toLocaleTimeString())

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```