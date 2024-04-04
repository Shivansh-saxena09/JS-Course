const companies =["Facebook","TCS","Apple","Techmahindra"];
 const owners =["MarkZuck","Tata","Tim","Mahindra"];
 // companies.push(owners); // this will give an another array inside the array.
//   console.log(companies);
  

const comapniesOwners=companies.concat(owners); // this will concat both arrays correctly.
console.log(comapniesOwners)


 const comapniesOwners2 = [...companies,...owners] // this will give us individuals value of an array similar to concat but in concat we can spread only one array at a time.
 console.log(comapniesOwners2);


 const anotherArray = [1,2,3,[4,5,6,],[6,7,9,8,[5,6,8,9,0]]];
 const realAnotherArray = anotherArray.flat(Infinity) // ths will give a proper array 
 console.log(realAnotherArray);



 console.log(Array.isArray("Your Name")); // it will check  given is an array or not .
 console.log(Array.from("Your Name")); // It will  Convert all elements into array.

 console.log(Array.from({name:"Shivansh"}))// It will convert only name into array not keyword in place of keyword it gives an empty array.


 let math_Marks= 60;
 let chemistry_Marks = 70;
 let physics_Marks = 55;
 console.log(Array.of(math_Marks,chemistry_Marks,physics_Marks)); // It will give the marksof each subjects in a array.
