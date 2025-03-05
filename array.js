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
