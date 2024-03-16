//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())



let myCreatedDate = new Date(2024,0,24);
console.log(myCreatedDate.toDateString());

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let myNewDate = new Date()
console.log(myNewDate.getDay())


myNewDate.toLocaleString('default',{
    weekday: "short"
})