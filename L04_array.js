let favNums = [
    1,5,10,13,15,17
];
console.log("favNums Array: " + String(favNums).replaceAll(","," ",));

favNums.push(20);
console.log("After pushing 20: " + String(favNums).replaceAll(","," ",));

favNums.splice(0, 2);
console.log("splice(0,2): " + String(favNums).replaceAll(","," ",));

console.log("find the index of 20: " + favNums.indexOf(20));

console.log("slice(2,4) " + favNums.slice(2,4));