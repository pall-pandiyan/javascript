let shoppingList = [
    // [description, qty, rate]
    ["apples", 1, 10],
    ["oranges", 2, 12],
    ["eggs", 1, 15]
]

let sum = 0;
console.log("Shopping List:");
console.log();
console.log("\t" + "Name" + "\t" + "Qty" + "\t" + "Rate" + "\t" + "Amount");
console.log("\t" + "----" + "\t" + "---" + "\t" + "----" + "\t" + "------");
shoppingList.forEach(item => {
    item.push(item[1] * item[2]);
    console.log("\t" + String(item).replaceAll(",", "\t"));
    sum += item[3];
});

console.log("\t\t\t-----------");
console.log("\t\t\tSum \t$" + sum);
console.log("\t\t\t-----------");

// the output will be...
// Shopping List:

//         Name    Qty     Rate    Amount
//         ----    ---     ----    ------
//         apples  1       10      10
//         oranges 2       12      24
//         eggs    1       15      15
//                         -----------
//                         Sum     $49
//                         -----------