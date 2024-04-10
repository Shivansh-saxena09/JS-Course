// foreach loop 

const bikes = ["hero", "Honda","Royal", "java"]

// bikes.forEach( (item)=>{
//     // console.log(item)
// } )

// function printME (item){
//     console.log(item)
// }

// bikes.forEach(printME)


bikes.forEach( (item ,index,arr)=>{
    console.log(item,index,arr)
}  )



const cars = [
    {
        company:"honda",
        price:"1000000",
    },

    {
        company:"Kia",
        price:"2000000",
    },

    {
        company:"ferrari",
        price:"6000000",
    },
]

cars.forEach( (item)=>{
  console.log(item.company)
} ) // it will print all the company names of cars.