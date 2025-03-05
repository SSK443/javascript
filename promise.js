const myPr = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("data fetched sucessfulluy");
    } else {
      reject("error fetching sucessfully");
    }
  }, 2000);
})

.then((result)=>{
  console.log("success:",result);
  
})
.catch((error)=>{
  console.log("errror",error);
  
})
