//if

const isUserLoggedIn = true

const temp = 39

if(temp < 40){
console.log("yes")
}else{
    console.log("no")
}

// operators
// <, >, <=, >= , == , ===, != , !==

// const score = 400

// if(score>900){
//     let staus = "qualified"
//     console.log(`user status: ${staus}`)
// } 




// short hand notation 

// const marks  = 70

// if(marks < 80) console.log("good");

// // nesting
// if(marks < 80){
// console.log("less than")
// } else if(marks > 60) {
//     console.log("yes")
// }else{
//     console.log("less than 700");
// }



const userLoggedIn  =  true
const debitCard = true
const loggedInFromGoogle = false
 const loggedInFromEmail = true

if(userLoggedIn && debitCard){
 console.log("allow to buy")
}else{
    console.log("add debitcard")
}



if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow to buy")
   }else{
       console.log("add debitcard")
   }