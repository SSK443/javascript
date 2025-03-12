const number=[1,23,444];
console.log(number.length);

number[1]="home"
console.log(number);

number.push("ffvfj")
console.log(number);
number.pop()
console.log(number);
number.unshift("fokrj")
console.log(number);
number.shift()
console.log(number);

const num=[1,3,4,5];
console.log(num.concat(number)
);


const show=[...number,...num];

console.log(show);


const nums = [10, 20, 30, 40, 50];

console.log(nums.slice(0, 1));

console.log(nums.slice(0, 3));

const fruits = ["Apple", "Banana", "Mango"];

fruits.splice(0,2,"strawberry","coconut")
console.log(fruits);

console.log(fruits.indexOf("coconut"));

console.log(fruits.includes("Mango"));


const numbers1 = [5, 12, 8, 130, 44];
console.log(numbers1.find((e) => e == 44) ? "yes" : "no");
console.log(numbers1.some((e) => e ==44));

console.log(numbers1.every((e) => e > 1));

console.log(numbers1.reverse());

console.log(numbers1.map((e) => e * 2));

console.log(numbers1.reduce((a, b) => a < b?a:b));

const words = ["ferf","dfvrfv"];
console.log( words.join(" "));
console.log(words);

const text = "Hello World";
console.log(text.split(""));
delete numbers1[1]
//Write a function to find the largest number in an array.
const arr = [10, 20, 5, 8, 100, 25];
console.log(arr.reduce((a, b) => (a > b ? a : b)));
// Check if an Array Contains a Value
// Write a function that checks if an array contains the number 5 using .includes().

const arr1 = [1, 2, 3, 4, 6];

console.log(arr1.includes(5) ? "yes" : "no");


//3️⃣ Filter Even Numbers
// Return a new array containing only even numbers.

const arr2= [1, 2, 3, 4, 5, 6];

console.log(arr2.filter((e) => e % 2 == 0));

//Find the Second Largest Number

const arr4 = [10, 20, 30, 40, 50];
const largest =arr4.reduce((a,b)=>a>b?a:b)

console.log(arr4.filter((e) => e !== largest).reduce((a, b) => (a > b ? a : b)));

//Write a function to remove duplicates from an array.
const arr5 = [1, 2, 2, 3, 4, 4, 5];
// Output: [1, 2, 3, 4, 5]
let result=[];
arr5.forEach((e)=>{
  if(!result.includes(e)){
    result.push(e)
  }
})
console.log(result);

//Write a function that merges two sorted arrays into one sorted array.
const arr6 = [1, 3, 5];
const arr7 = [2, 4, 6];

arr9=[...arr6,...arr7]

console.log(arr9.sort((a,b)=>a-b));

let virat =Array.of(1,3,45)
console.log(virat);
console.log(Array.isArray(true));
let arr10="ssk";
console.log(Array.from(arr10));
let arr11={
  name:"virat",
  age:32,
  country:"india"
}
console.log(Array.from(Object.values(arr11)));
console.log(Array.from(Object.keys(arr11)));

// Create an array of numbers from 1 to 10.
let array=[1,2,3,4,5,6,7,8,9,10,11,10];
console.log(array.length);
console.log(array[2]);
console.log(array);
array.pop();
console.log();

console.log(array.includes(5)?'yes':"no");
console.log(array.join(" "));
console.log(array.sort((a,b)=>b-a));
console.log(array.reverse());
let Output=[];
for(let i=array.length-1;i>0;i--){
  Output.push(array[i])
}
console.log(Output);

console.log(array.reduce((a,b)=>a+b));
console.log(array.reduce((a,b)=>a<b?a:b));
console.log(array.filter((e)=>e%2==0));
console.log(array.sort((a,b)=>a-b));
console.log([...array,...Output]);
let arrays=[1,1,44,44,44,555,444,5,4,5,6]
let result1=[];
for(let i=0;i<=arrays.length;i++){
if(!result1.includes(arrays[i])){
  result1.push(arrays[i]);
}
}
console.log(result1);

let high=arrays.reduce((a,b)=>a>b?a:b);
console.log(arrays.filter(e=>e!==high).reduce((a,b)=>a>b?a:b));


// function array1(i){
//   let array=[];
//   for(i;i<=10;i++){
//     array.push(i);
 
//   }
//   console.log(array);
  
// }
// array1(1);

// console.log(Array.from({ length: 10 }, (e, i) => i + 1));

// Basic Questions
// Create an array of numbers from 1 to 10.
// Find the length of an array.
// Access the third element in an array.
// Add an element "Hello" at the end of an array.
// Remove the first element of an array.
// Check if an array contains the number 5.
// Convert an array to a string.
// Reverse an array without using .reverse().
// Intermediate Questions
// Find the sum of all elements in an array.
// Find the largest number in an array.
// Filter out even numbers from an array.
// Sort an array in ascending order.
// Merge two arrays without using .concat().
// Remove duplicate values from an array.
// Find the second largest number in an array.
// Rotate an array k times to the right.
// Advanced Questions
// Find the intersection of two arrays.
// Find the union of two arrays.
// Find the missing number in an array of consecutive numbers.
// Flatten a nested array without using .flat().
// Group an array of objects by a specific key.
// Find the most frequently occurring element in an array.
// Implement a function to shuffle an array randomly.
// Create a deep copy of a nested array.
// Would you like solutions for any of these? 🚀