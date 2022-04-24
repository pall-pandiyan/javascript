let cat = {
    name : "Fluffy",
    age : 1,
    color : "white",
    eyeColor: "brown",
    sound() {
        console.log("meow!")
    },
    hobbies: ["purring", "meowing", "eating"]
}

console.log("My Cat's Name: ",cat.name);
console.log("Her eye color: ", cat.eyeColor);
console.log("Hobies: ", cat.hobbies);

// the output will be...
// My Cat's Name:  Fluffy
// Her eye color:  brown
// Hobies:  [ 'purring', 'meowing', 'eating' ]