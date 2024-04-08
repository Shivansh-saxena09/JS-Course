// Functions In JS

function greetMe() {
  console.log("hello Shivansh how are you");
}
greetMe();
greetMe();
greetMe();
greetMe(); // for calling the same function again and again i will make the same thing without write the code again again so this is the basic need of function.

function addTWoNumbers(num1, num2) {
  console.log(num1 + num2);
}
addTWoNumbers(7, 10);


function addTWoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = addTWoNumbers(7, 10);
console.log("Result:", result); // function will return their functioning and after return if we want to write another code in function then it will not work because after return the function is terminated.



function addTWoNumbers(num1, num2) {  return num1 + num2;
}
//   const result =   addTWoNumbers(7,10)
console.log("Result:", result); // this is the another way to resturning anything in a function



// some conditions in functions.
function loginUSerMessage(username) {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUSerMessage());




// handle infinte number of arguments
function totalPrice(...num) {
  // this is the rest operator and it is aslo a spread operator its depend upon he situation what we called rest or spread.it gives all the arguments into array.
  return num;
}
console.log(totalPrice(100, 400, 800, 500));




// objects in function
const user = {
  name: "shivansh",
  course: "B.tech",
};
function handleObject(anyobject) {
  console.log(
    `user name is ${anyobject.name} and course is ${anyobject.course}`
  );
}
handleObject(user);

handleObject({
  name: "shivansh",
  course: "B.tech",
}); // we can also pass objects direct into a function call.




// Arrays in functions

const myArray = [100, 800, 700, 300];

function returnSecondValue(getArray) {
  return getArray[3];
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100, 800, 700, 300])); //similary we can pass an array into a function call directly .
