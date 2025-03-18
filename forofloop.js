const myArry = [1, 2, 3, 4, 5];

for(arr of myArry){
  console.log(arr);
  
}
const stri="mahadev";
for(string of stri){
  console.log(string);
  
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key,value] of Object.entries(myObject)){
  console.log(`${key}: ${value}`);
  
}