let a; // only declaring
a = 10; // now defining value
let b = 20; // declaring and defining in the same line

var c = 30; // the old way to declare variable, the scope of var is the entire function, so developers usually use 'let' instead

const PI = 3.14; // constant variable should define the value when declared (in the same line.) the value of constant variable cannot be changed.

// all of these variable can be aceesed by calling its name, constant variable only have read access but others can be modified or rewritten.
console.log(a);
console.log(a + b);
console.log((c += a - b));
console.log(PI * a * b);
// the output will be...

// 10
// 30
// 20
// 628
