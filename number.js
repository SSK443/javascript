console.log(Number("123"));

const num =new Number(100)
console.log(typeof num);

console.log(typeof Number(num));

const skk="1000pxeferf";
console.log(parseInt(skk));

console.log(parseFloat("11.5pxrr"));
console.log(isNaN("123"));

console.log(Number.isFinite(Infinity));
console.log(Number.isInteger("34c"));

console.log(Math.round(3.8));
console.log(Math.floor(3.9));
console.log(Math.ceil(4.1));

console.log(parseFloat("44.5tt"));
console.log(isNaN("rgtjtri"));
console.log(Number.isFinite(444));
console.log(Number.isInteger(34));

console.log(Math.round(3.1));
// console.log(Math.floor(3.9));
// console.log(Math.ceil(4.1));
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(-4.9));
let num1=3.444;
console.log(num1.toFixed( 1));
console.log(num1.toFixed( 0));
let num2=5.444;
let num3=5555;


console.log(num2.toPrecision(15));
console.log(num3.toPrecision(2));
let num4=444;
console.log(num4.toString(3));
console.log(Math.abs(-3.3));
console.log(Math.pow(2,2));
console.log(Math.sqrt(18));


Math.cbrt(34);
let num5=[3,4,55,66];
console.log(Math.max(...num5));
console.log(Math.min(...num5));
console.log(Math.random()*10+1);

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random()*10)+1);
function randomInteger(min,max){
  return Math.floor(Math.random()*(max-min+1))+min
}
console.log(randomInteger(10,45));

function float(max,min){
  return Math.random()*(max-min)+min
}
console.log(float(10,45));

console.log(Math.random()<0.5);
