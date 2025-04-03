const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myNums.filter((e)=>{
  return e > 4;
  
}).map(e=>{
  return e*10
}));
let outpush=[];
let store=myNums.filter((e)=>{
  return e>4
})
outpush.push(store)
console.log(outpush);
let result=[]
for(key of myNums){
  if(key >5){
result.push(key)

  }
 
  
}
 console.log(result);


 const books = [
   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
 ];

books.filter((e) => e.genre == "Science").map(e=>console.log(e.title))
books.filter((e) => e.publish >= 2000 && e.edition >= 2000).forEach(e=>console.log(e.title)
)

 