//post fix
let a=5;
let b=a++
console.log(`a:${a}\n b:${b}`);


//prefix
let c=10;
let d=++c;
console.log(c);
console.log(d);

// 1. Postfix (x++ or x--)
// The value is used first, then incremented or decremented.
// The original value is returned before modification.
// Example:
// js
// Copy
// Edit
// let a = 5;
// let b = a++; // Postfix increment: assigns a to b, then increments a

// console.log(b); // Output: 5 (original value before increment)
// console.log(a); // Output: 6 (a is now incremented)
// js
// Copy
// Edit
// let x = 10;
// let y = x--; // Postfix decrement: assigns x to y, then decrements x

// console.log(y); // Output: 10 (original value before decrement)
// console.log(x); // Output: 9 (x is now decremented)
// 2. Prefix (++x or --x)
// The value is incremented/decremented first, then used.
// The modified value is returned immediately.
// Example:
// js
// Copy
// Edit
// let a = 5;
// let b = ++a; // Prefix increment: increments a first, then assigns

// console.log(b); // Output: 6 (incremented value)
// console.log(a); // Output: 6 (a is incremented)
// js
// Copy
// Edit
// let x = 10;
// let y = --x; // Prefix decrement: decrements x first, then assigns

// console.log(y); // Output: 9 (decremented value)
// console.log(x); // Output: 9 (x is decremented)
// Key Differences
// Operation	Behavior	Example	Output
// Postfix x++	Uses current value, then increments	let a = 5; let b = a++;	b = 5, a = 6
// Prefix ++x	Increments first, then uses new value	let a = 5; let b = ++a;	b = 6, a = 6
// When to Use Prefix vs Postfix?
// Use Prefix (++x) when you want the updated value immediately.
// Use Postfix (x++) when you need the original value before modification.
// Would you like some more examples or use cases? 😊

let loe=5;
loe++
console.log(loe);
