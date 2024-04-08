const userEmail = []
if (userEmail) {
    console.log("got user email")
}else{
    console.log("Dont have email")
}

// falsy values 

// false , 0 , -0, bigint 0n , "" , null , undefined , nan


// truthy values

// true , {} , [] , "" , 'false' , function(){}


if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}

// nullish coalescing operator (??): null defined

let val1;
// val1 = 6 ?? 9
val1 = null ?? 78
val2 = undefined ?? 80
val3  = null ?? 70 ?? 90


console.log("val1") //  it gives 6
console.log("val1") // it gives 78 
console.log(val2) // it gives 80
console.log(val3) // it gives 70



// Terniary operator
// condition ? true : false;

const marks = 88
marks > 60 ? console.log("good") : console.log("bad")