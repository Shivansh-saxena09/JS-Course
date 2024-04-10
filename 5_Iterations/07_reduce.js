const myNumber = [1,2,3,4]

 myTotal = myNumber.reduce( function (acc,curval){
    console.log(`acc :${acc} and currval ${curval}`)
    return acc +curval
 },0) // 0 isliye dia hai  q ki accumelator initial value 0 leta hai 
 console.log(myTotal)

//  same thing by arrow function 

 const myTotal = myNumber.reduce( (acc,currval)=> acc + currval,0)
 console.log(myTotal)


 let shoppingCart = [
    {
        itemName:"JS course",
        price:199,
    },

    {
        itemName:"HTML course",
        price:99,
    },

    {
        itemName:"MERN course",
        price:12000,
    },

    {
        itemName:"CPP course",
        price:350,
    },
 ]

const totalPrice = shoppingCart.reduce( (acc,item)=> (acc + item.price), 0)
console.log(totalPrice)