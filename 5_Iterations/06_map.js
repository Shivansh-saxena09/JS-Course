const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumber = myNumbers.map( (num)=> num +10) // it will also returns automatically
// console.log(newNumber)


// Chaining-----> when we use two or more then two methods at a time

const nums2 = myNumbers
    .map( (num)=> num * 2)
    .map( (num)=> num  + 4)
    .filter( (num)=> num >10)
console.log(nums2)



