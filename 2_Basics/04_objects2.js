//const fbUser=new Object() // this is a singleton object.

const fbUser = {} // this is not a singleton object.

fbUser.id = "243503"
fbUser.name="Shiva"
fbUser.isLoggedIn=true

// console.log(fbUser)

const membershipUser = {
    email:"123@abc.com",
    fullname:{
        userfullname:{
            firstname:"Shiva",
            lastname:"saxena"
        }
    }
}


console.log(membershipUser.fullname)
console.log(membershipUser.fullname.userfullname)


const obj1 ={1:"Shiva",2:"Abhi",3:"Simran",4:"Saloni"}
const obj2 = {5:"Btech",6:"B.com",7:"BTC",8:"Bsc"}

const obj3 ={obj1,obj2} // this is not teh way to merege objects.
// console.log(obj3)

const objcombine = Object.assign({},obj1,obj2); // this is the correct way to combine any objects.
// console.log(objcombine)



const objcombine2 ={...obj1,...obj2} // this is also a correct way to combine any object or we can say here we spread the objects.
// console.log(objcombine2)

const users = [
    {
        id:123,
        email:"123@abc.com",
    },
]
// users[1].email
console.log(fbUser)

console.log(Object.keys(fbUser)) // this will gives all the keys of an object in an array.
console.log(Object.values(fbUser))
console.log(Object.entries(fbUser)) // it will make all the keys with value in a array inside the array.
console.log(fbUser.hasOwnProperty('isLoggedI')) // it will check is this property  is avialbake in your object or not .



// Destructuring in Objects.

const bike ={
    name:"Gt650",
    price:"450000",
    company:"Royal Enfield",
}
console.log(bike.price) // this older way to access any valye or anu object.
 const {name} = bike; // but when we used destrctrucring like this then we only used value name to use it.
 const {name:naam} = bike;// thhis also a way .
 console.log(naam);


