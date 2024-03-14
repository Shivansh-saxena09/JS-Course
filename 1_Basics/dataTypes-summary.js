// # Priitive Data type 

//7 types => String, Number,Boolean,NULL,undefined,Symbol,BigInt

const score= 100;
 const scoreValue=123.67;
const isLoggedIn= true;
let userEmail;

const id = Symbol('567')

const anotherId = Symbol('567')

console.log(id=== anotherId)

const bigNumber = 52457354463454657545345545n


// Refrence (Non Primitive)

// Array,Object,Functions.


const cars =["Supra", "Murano","Rapide"];

let myObj ={
    name:'Shivansh',
    age:'23'
}

const myFunction = function () {
 console.log('hello world')
}