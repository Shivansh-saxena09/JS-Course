//for of loop

const myArray = [1,2,3,4,5,6,7]

for (const num of myArray) {
    // console.log(num) // but it do not gives value in arrays.
}


const mystr = "hey shivansh"
for (const myName of mystr) {
    // console.log(`say my name:${myName}`)
}


// Maps

const map =new Map()
map.set('In',"India")
map.set('UK',"United Kingdom")
map.set('In',"India") // maps canot take same values it only takes unique values and strictly follows the order which you defined.
console.log(map)

 // we can loop this map also like below

 for (const [key,value] of map) {
    // console.log(key,':-', value)
 }



 // for of in object 

//  myobj ={
//     "team1":"India",
//     "team2":"Autralia"
//  }

//  for (const [key,value] of myobj) {
//     console.log(key,":-",value)
    
//  } // note for of loop can not iterate objects



  const myobject ={
      JS:"JavaScript",
      TS:"Typescript",
      DB:"Database",
      Rb:"Ruby"
  }

  // this is for in loop it used to iterate objects
  for (const key in myobject) {
    // console.log(`${key} shortcut for ${myobject[key]}`)
   
  }


  // can we used forin loop in array lets see

  myarr = ["Shivansh", "Abhi", "Stuti"]

  for (const key in myarr) {
    // console.log(key) // it will give on ly keys of array like 0 1 2 in array indexing is the key of any array .
    console.log(myarr[key]) //  this will give the actual array.
    
  }



  // can we used for in loop in map ?

  const map1 =new Map() // map is not iterable in forin loop .
map.set('In',"India")
map.set('UK',"United Kingdom")
map.set('In',"India")
 for (const key in map1) {
    // console.log(key) // nothing will print
   
 }