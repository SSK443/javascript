const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log( myNums.reduce((a,b)=>a>b?a:b));


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
  ]

console.log(shoppingCart.map((e) => e.price).reduce((a, b) => a + b));

