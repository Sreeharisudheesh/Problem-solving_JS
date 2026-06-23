// 2. Swap the values of two variables without using a third variable.

// let a =56 ;
// let b=65;

// a=a+b; 56+ 65= 121
// b=a-b; 121- 65= 56
// a= a-b; 121- 56 = 65

// console.log(`b is  ${b} and a is ${a}`);

// Understand the logic.
// Derive the code.
// Don't depend on memory.

// sum - first number = second number
// sum - second number = first number

// using DESTRUCTURING 

let x= 10;
let y = 20;

[x,y]=[y,x];

 console.log(x);
 console.log(y);
 
//  here through destructuring we swap the values with positon that how destructuring works , we use it swap it and prints the value , in this it works postional manner not the values inside 


 let a = 5;
let b = 10;
let c = 15;

[a, b, c] = [c, a, b];
15,5,10
// Left position 1 ← Right position 1
// Left position 2 ← Right position 2
// Left position 3 ← Right position 3

// JavaScript evaluates the right side first, then assigns values to the left side.