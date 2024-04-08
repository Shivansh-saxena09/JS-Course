// Immediately Invoked Function Expressions (IIFE)
// we used IIFE for safe our functions to be polluted by globale variables.

// this is the syntax of IIFE
(function db(){ // this is named IIFE
    console.log("DB connected")
})(); // in IFFE its important to stop function with semicolon.



//arrow function in IIFE

( ()=>{ // this is unamed IIFE
    console.log("DB two connected")
} )();


// with parameter an argument

( (dbName)=>{
    console.log(`DB two connected ${dbName}`)
} )("MongoDB")