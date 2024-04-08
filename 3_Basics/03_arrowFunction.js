const user={
    username:"shivansh",
    price:"599",
    welcomeMessage:function(){
        console.log(`${this.username},welcome to our website`) // when we used current context in object then we can access it by "this" keyword.
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username="Shiva"
// user.welcomeMessage() // it will print Shiva as a username because this keyword handle current context but we changed username aftercalling the function and then calling the function again it will change.
 console.log(this) // in node environment this refers empty object in global.but in browser this refers window object.
 // Node environment me global object ek empty object hai.
 // Browser me global object ek window object hai.



 // Arrow functions in JS

 function check(){
    const name= "Shivansh"
    console.log(this.name) // it will give undefined because context can we use in object only not in functions.
 }
 check()


 const check_2 = ()=>{
    let name="Shivansh"
    console.log(this.name)// in arrow function  also we cannot use this keyword for current context.
 }
 check_2()



 const addThree=(num1,num2)=>{
   return num1+num2
 }
console.log( addThree(4,5))


// Implicit Return Function
// when we use curly braces in function then it will compulsoury to use return but in like these two function we can not use return.
// when we use curly braces then they called explicit return function.]


const add=(num1,num2)=>   num1+num2

const subtract = (num1,num2)=>(num1-num2)

const obj= ()=>({username:"Javascript"}) //  this is how we can create object in impicit functions
  
console.log(obj())


 