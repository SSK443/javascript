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
