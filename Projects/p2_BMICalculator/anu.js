

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