// const text = "JavaScript";

// console.log(text.length);

// const str1 = "I'm  \n learning\tJavaScript!"; 
// console.log(str1);

// const chor="fdff \"frenfjen\""

// const str3 = "This is a backslash: ";  // ✅ Escaping a backslash
// console.log(str3);

// const str = "Hello";
// console.log(str.charAt(1,3));
// console.log(str.substring(0,5));
// str[1]
// str.toUpperCase()
// str.toLowerCase()
// str.trimStart()
// str.trimEnd()
// const ster = "JavaScript";
// console.log(ster.slice(0,5));

// const str4 = "I love Python";

// console.log(str4.replace("love", "hate"));

// const str9 = "apple,banana,orange";

// console.log(str9.split(''));
// const fruits = ["apple", "banana", "orange"];
// console.log(fruits.join(" "));

// const str0 = "I love JavaScript";
// console.log(str0.includes("love"));
// console.log(str0.startsWith("I"));
// console.log(str0.endsWith(" JavaScript"));


// console.log(str0.repeat(2));

// const num = 100;
// console.log(String(num));
// const bool=true;
// console.log(typeof bool.toString());

// //1️⃣ Write a function that counts the number of vowels (a, e, i, o, u) in a given string.


// function countVowels(str) {
//  const vowels=['a','i','e','o','u']
//  let count=0;
 
// for(let i=0;i< str.length;i++){
// if (vowels.includes(str[i].toLowerCase())) {
//   count++;
// }

// }
// return count;


// }

// let s="hello";
// console.log(s.split("").sort((a,b)=>b-a));

// console.log(s.split('').reduce((a, b) => b + a,""));

function reverse(str){
  let rev="";
  for(let i=str.length-1;i>=0;i--){
rev+=str[i]
  }
  return rev
}
console.log(reverse("hello")); // Output: "olleh"