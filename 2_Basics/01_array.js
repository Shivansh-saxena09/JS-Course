//Arrays in JavaScript


 // Shallow copy --------> they can made changes in original array itself.

 // Deep copy ------------>  they can made a new array with changes.

const myArray = [1,2,3,4,5,6]; // number base array.
const myCompanies = ['TCS','HCL','Google','Facebook'] // String base array.

const myArray2 = new Array(1,2,3,4,5,6); // Another way to make array.
console.log(myArray[4]) // output ---> 5


//Methods of Arrays

myArray.push(7) // add element in array from behind.
myArray.pop(); // remove element in array from behind.
myArray.unshift(15) // add element in array from starting.
myArray.shift() // remove element in array from starting.

// console.log(myArray.includes(4))
// console.log(myArray.indexOf(2)) // if we ask a index of an element whch is not in our array then it will always show -1 index.

const newArray = myArray.join() // join will bind our array and convert it into a string .
console.log(myArray);
console.log(newArray)

// slice ------> in this method our orginal method is not affected.
// splice -----> but in this our original array is affected.





