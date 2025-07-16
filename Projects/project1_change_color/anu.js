
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