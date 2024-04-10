const bikes = ["hero", "Honda","Royal", "java"]


// const values = bikes.forEach( (item)=>{
//     console.log(item)
//  })
//  console.log(values) // it willl give undefined because foreach cant directly return values if we want to return their value then we can do ....below.


 const values = bikes.forEach( (item)=>{
    console.log(item)
    return item
 })
 console.log(values) // It will also not return values 


// filter
//filter k value return karta hai.
// const nums = [1,2,3,4,5,6,7,8,9,10]

// myValues = nums.filter( (num)=> num >4 )
// // console.log(myValues) // it will print values grater then 4.


// const nums2 = [1,2,3,4,5,6,7,8,9,10]

// myValues = nums2.filter( (num)=>{
//     return num >5 // when we use function like this means to say use curly braces in function in filter then it must to return otherwise it wil print nothing.
// } )
// console.log(myValues)


// how can we perform samge thin in foreach.

// const newNumber = []
// nums.forEach( (num)=>{
//    if (num >4) {
//     newNumber.push(num)
//    }
// })
// console.log(`new number are:${newNumber}`)



let students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Jane", age: 22, grade: "B" },
    { name: "Doe", age: 20, grade: "C" },
    { name: "Alice", age: 19, grade: "A" },
    { name: "Bob", age: 23, grade: "B" },
    { name: "Eve", age: 20, grade: "C" },
    { name: "Michael", age: 24, grade: "B" },
    { name: "Emily", age: 18, grade: "A" },
    { name: "David", age: 21, grade: "C" },
    { name: "Sophia", age: 22, grade: "B" }
];




 const userStudents = students.filter((items)=> items.name === 21 )
 const anotherStudents = students.filter( (item)=>{ return item.age === 20 && item.grade === "C" }) // here we used curly braces means scope then itsimportant to use return keyword here.


 console.log(anotherStudents)
