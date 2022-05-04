let x = NaN;
let y = 100 / "10";
let z = y / "abc";

console.log("X is", x);
console.log("Y is", y);
console.log("Z is", z);

console.log("isNan(x)", isNaN(x));
console.log("isNan(y)", isNaN(y));
console.log("isNan(z)", isNaN(z));

// the output will be...

// X is NaN
// Y is 10
// Z is NaN
// isNan(x) true
// isNan(y) false
// isNan(z) true
