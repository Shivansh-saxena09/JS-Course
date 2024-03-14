const name = "Shivansh"
const  age = 20;
let gender = 'Male';
let country = 'India';

// console.log(name + age + gender+country)


console.log(`hello my name is ${name} and  i m ${age} year old my gender is ${gender} and i belong to ${country}`)

// another way to  declare and initialize variables
const courseName = new String("JavaScript")

console.log(courseName[1])
console.log(courseName .__proto__)

console.log(courseName.charAt(4))
console.log(courseName.indexOf('i'))

const newString = courseName.substring(0,3)
console.log(newString)


const anotherString = courseName.slice(-9 ,6)
console.log(anotherString)

const stringOne = "    Shivansh"
console.log(stringOne)
console.log(stringOne.trim())

const phrase = "import time from life and time dot heal"
 console.log(phrase.replace('time','waqt'));

 console.log(phrase.includes('life'));

 const splitString = "Shivansh- saxena-bareilly-faridpur"
 console.log(splitString.split('-'))