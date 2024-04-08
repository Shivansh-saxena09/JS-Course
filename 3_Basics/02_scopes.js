

{} // It is scope everything which is in a curly braces defines its scopes.

// two types of scope global and block level.
// browser k console me global scope alag hai .
// or node enviroment me global scope alag hai.



if(true){
    let x = 20;
    const y = 30;
    var z = 40;
}

// console.log(x)
// console.log(y)
console.log(z) // it will print 40 because var does not support any block level scope thats why everyone tells that never used var in jS.

// Nested Scopes 

function scope1(){
    const username="shivansh"

     function scope2(){
        const price ="500"
        console.log(username)
     }
    //  console.log(price)
     scope2()
}

scope1()
// when we have a nested functions the child functions can access the variables of parent function in other words we can say clousers for it.


if(true){
    const username = "shivansh"

    if(username === "shivansh"){
        const price = " 500"
        console.log(username + price)
    }
    // console.log(price)
}
// console.log(username)


//------------------ important ----------------------------------------------------
// console.log(addOne(7))
function addOne(num){
    return num+1

}


console.log(addTwo(6)) // when we declare a function and store it into a varibale then we can not call it before initialization of function thisis also called hoisting in JS.
const addTwo = function(num){ //these types of functions are called expressions also.
    return num+2
}
