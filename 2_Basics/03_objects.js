// singleton ------> when you make a object from constructor its called singleton object.
// when we declared objects like literals then singleton will not make.


//Object.create // this the way to make object by constructor.




// object literals 

const mySymbol = Symbol("key1")

const user = {
    name:"Shivansh",
    [mySymbol]:"mykey1", // this is the way to create  symbol in object which is a data type also.
    "fullname":"Shivansh Saxena",// there is no way to access this value with dot we can access this by square notation.
    age:"23",
    gender:"male",
    isLoggedIn:"false"
}

console.log(user.name);
console.log(user["age"]);
console.log(user["fullname"]) // this is the way to access the full name key value pair.
console.log(user[mySymbol])//this is the way to print that symbil object.


user.age = "24"; // overwrite the object 
// Object.freeze(user);
user.age="25";
console.log(user)


user.sanskaariBachha= function(){
    console.log("Namaskaar")
}


user.notSanskaari= function(){
    console.log(`whatsup uncle,${this.name}`) //this is string intropolation
}
console.log(user.sanskaariBachha());
console.log(user.notSanskaari())
