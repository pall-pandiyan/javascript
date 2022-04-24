const multiplier = (muliple) => {
    return (number) => {
        return number * muliple;
    }
}
const mulBy2 = multiplier(2);
const mulBy3 = multiplier(3);


function multi(multiple) {
    return function(number) {
        return number * multiple;
    }
}
const mulBy4 = multi(4);
const mulBy5 = multi(5);

console.log("mulBy2(4) : " + mulBy2(4));
console.log("mulBy3(4) : " + mulBy3(4));
console.log("mulBy4(4) : " + mulBy4(4));
console.log("mulBy5(4) : " + mulBy5(4));


// the output will be...
// mulBy2(4) : 8
// mulBy3(4) : 12
// mulBy4(4) : 16
// mulBy5(4) : 20