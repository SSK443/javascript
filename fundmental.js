// // var age=44;
// // age=55
// // console.log(age)

// // let name="ssk"
// // name="loe"
// // console.log(name);

// // const mam=true;

// // console.log(mam);
// // let susn
// // console.log(typeof susn);
// // let shiva=null
// // console.log(typeof shiva);

// // function add(n1,n2){
// //   return n1%n2
// // }
// // console.log(add(10,3));

// // function swap(){
// //   let a=5;
// //   let b=6;
// //   let c=a;
// //   a=b;
// //   b=c;
// //   console.log(`a:${a} b:${b}`);
  
// // }
// // console.log(swap());
// // function swapnumber(a,b){
// //   a=a^b;
// //   b=a^b;
// //   a=a^b;
// //    console.log("After swapping: a =", a, ", b =", b);
// //   //🔹 Explanation:

// // //XOR (^) is a bitwise operator that flips bits where they are different.
// // //This trick works because XOR of a number with itself results in 0, and XOR with 0 returns the original number.
// // }
// // swapnumber(5,10)


// // function swap1(a,b){
// //   [a, b] = [b, a]; // Swapping using destructuring
// //   console.log(`a=${a} b=${b}`);
// // }
// // console.log(swap1(4,5));


// // function num(n){
// //   if(n>0){
// //     console.log("postive");
    
// //   }else if(n==0){
// //     console.log('zero');
    
// //   }else{
// //     console.log('neagative');
    
// //   }
// // }
// // console.log(num(-3));
// // let n3=51
// // if(n3>=1||n3%2==0){
// //   console.log('true' );
  
// // }else{
// // console.log('flse');

// // }
// // function leap(year){
// //   if(year%4==0){

// //   }
// // }


// // function maxOfTwo(a, b) {
// //     // Your code here
// //     if(a>b){
// //       console.log('a larger');
      
// //     }else{
// //       console.log("b greater");
      
// //     }
// // }
// // console.log(maxOfTwo(10, 20)); // Output: 20
// // console.log(maxOfTwo(50, 30)); // Output: 50
// // let numz=-44
// // console.log(numz>0?"postive":numz==0?"zero":"neag");

// function getGrade(mark) {
//     // Your code here
//     if(mark>=90&&mark<=100){
// console.log('A');

//     }
//     if (mark >= 80 && mark <= 89) {
//       console.log("b");
//     }
//     if (mark >= 70 && mark <= 79) {
//       console.log("c");
//     }
//     if (mark >= 60 && mark <= 69) {
//       console.log("d");
//     }
//     if(mark<60){
//       console.log("f");

//     }
    
// }
// console.log(getGrade(85)); // Output: "B"
// console.log(getGrade(72)); // Output: "C"
// console.log(getGrade(59)); // Output: "F"

// function evenOrOdd(num) {
//   switch (num % 2) {
//     case 0:
//       return "even";
//     case 1:
//     case -1:
//       return "odd";
//     default:
//       return "invalid inpiut";
//   }
// }
// console.log(evenOrOdd(4));  // Output: "Even"
// console.log(evenOrOdd(7));  // Output: "Odd"
// console.log(evenOrOdd(-5)); // Output: "Odd"
// console.log(evenOrOdd(0));  // Output: "Even"
//  let sum1 = 1;
// for(i=1;i<=10;i++){
 
// sum1=sum1*i
// }
// console.log(sum1);
let i=1
 let sum2 = 0;
while(i<10){
 
sum2=sum2+i
  i++
}
console.log(sum2);

 const isPrime=(prime)=>{
   let isTrue = 0;
   for (let i = 2; i < prime; i++) {
     if (prime % i == 0) {
       isTrue = 1;
       break;
     }
   }
   console.log(isTrue == 0 ? "yes" : "no");
 }
isPrime(9)


