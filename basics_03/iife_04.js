
// Immediately Invoked Function Expression (IIFE)

// 1] Global Scope theke polution chai nah
// 2] Oi khane e Immediately Execute hoye jay

// NAMED IIFE
(function one(){
    // named IIFE
    console.log(`Db connected`)
})() ; // ; lagano mendetory

// ( ekhane function definition likhte hobe)(thie is for execution)

// INTERVIEW te bolte hobe

/*
    1] Immediate execution
    2] Many times ,there ocurres problems from global scope variables, it polutes

*/


//  unnamed IIFE
((name)=>{
    console.log(`DB connected two ${name}`)
})(`Anushila`) ; // DB connected two Anushila