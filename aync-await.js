async function fetchData(){
  let data=await Promise.resolve("Hello ,Async!")
  console.log(data);
  
}

async function getPost(){
  try{
let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
let data=await response.json()
console.log("Post Tile :",data.title);


  }
  catch(error){
console.error("Error Fetching Data",error);


  }
}
getPost()