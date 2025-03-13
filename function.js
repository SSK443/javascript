function greet(name){
  return `Hello ${name}`
}
console.log(greet("Alice"));

function add(a=10,b=20){
  return a+b
}
console.log(add());

const multi=function(a=2,b=22){
  return a*b
}
console.log(multi());

const mohan=function(){
  console.log("hlo");
  
}
mohan()
const div=(a=44,b=4)=>{
  return a/b
}
console.log(div());

const saquare=x=>x*x;
console.log(saquare(5));

const adds=(a=3,b=4,c=5)=>a+b+c;
console.log(adds());

const news=()=>console.log('vffnvjfj');
;
console.log(news());

function add(num , num1){
 if(!num || num1){
  console.log('value misssing');
  return
 }
return num*num1
 
  
}
const noan =add(4,4)
console.log(noan);


const passMultipleArugment=(...num1)=>{//use rest operator we can pass multiple arugments in single parameter return it in arrange
  return num1
}
console.log(passMultipleArugment(1,23,444,4444));

const handleObject={
  name:"dhumai",
  age:33,
  married:true
}
const handleObjectFunction=(object)=>{
return `His name is ${object.name} this age is ${object.age} and he is married ${object.married}`
}

console.log(handleObjectFunction(handleObject));

//or

console.log(handleObjectFunction({
  name:"milak singh",
  age:22,
  married:false
}));

const handleArray=[1,44,555,6666];

const handleArrayFunction=(array)=>{
  return ` this aray second item ${array[1]}]`
}
console.log(handleArrayFunction(handleArray));

//or

console.log(handleArrayFunction([1,34,55,66,6]));

