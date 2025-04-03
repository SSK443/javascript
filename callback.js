// function greet(name,callback){
//   console.log(`hello ${name}`);
//   callback();
  
// }
// function sayGoodBye(){
//   console.log("goodbye");
  
// }

// greet("ssk",sayGoodBye)

// setTimeout(()=>{
//   console.log("this runs after 3 seconds");
  
// },3000)


// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);
// // Output: [1, 4, 9, 16, 25]


// function fetchData(callback){
//   setTimeout(()=>{
//     console.log("Data fetched from server");
//     callback()
    
//   },2000);
// }
// function processData(){
//       console.log("Processing the data...");
// }
// fetchData(processData)



// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }

// // Nested Callbacks (Callback Hell)
// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });

// function greet(name,callback){
//   console.log(name);
  
// callback();

// }
// function show(){
//   console.log("goodsex");
  
// }
// greet("sex",show)

// function sum(a,b,operate){
//   return operate(a,b);
// }
// function add(a,b){
//   return a+b
// }
// console.log(sum(1, 3, add));

// function process(arr,callback){
//   return arr.map(callback)
// }
// function aquare(arr){
// return arr*2;
// }

// console.log(process([2, 3, 4, 5], aquare));


function greet(name,callback){
  console.log(`hello ${name}`);
callback();
  
}
function goodbye(){
  console.log("goodbye");
  
}
greet("suraj",goodbye)


function calculate(num1,num2,operator){
  return operator(num1, num2);
}


function add(x,y){
  return x*y;
}
console.log(calculate(2,3,add));

const run=(n1,n2,callback)=>{
  console.log(n1*n2);
  callback()
  
}
const pass=()=>{
console.log("vinod");

}
run(1,3,pass)
console.log('/////////');

run(3,4,goodbye)
console.log("/////////");
run(3,4,()=>console.log("chadhur")
)