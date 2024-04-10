// for loop

for (let i = 0; i <=10; i++) {
    const element = i;
    // console.log(element)
    
}


for (let i = 0; i <=10; i++) {
    const element = i;
    if(element == 7){
//   console.log("7 is lucky number")
    }
    // console.log(element)
    
}


for (let i = 1; i <=10; i++) {
    // console.log(`outer loop:${i}`)
   for (let j = 1; j <=10; j++) {
    // console.log(`inner loop value:${j} and inner loop ${i}`)
    // console.log(i + '*' + j + '=' + i*j);
    
    
   }
    
}


 let myArray = ["Virat", "Rohit","Ruturaj", "Raina"]

for (let i = 0; i < myArray.length; i++) { // equals to is liye nahi chalaya q ki array me 0 se shuru hoti hai indexing.
    const element = myArray[i];
    // console.log(element)
    
}



// Break and Continue in loops

for (let i = 1; i <=15; i++) {
    if (i == 7) {
        // console.log(`detected 7`)
        break // it will break at 7 after that nothing is executed.
    }
    
// console.log(`value of i is : ${i}`)
    
}




for (let i = 1; i <=15; i++) {
    if (i == 7) {
        console.log(`detected 7`)
        continue // it will not print 7 but after that code is executed.
    }
    
// console.log(`value of i is : ${i}`)
    
}
