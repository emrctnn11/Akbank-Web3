const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");
let sum = 0;

while ( num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = parseInt(num / 10);
}

console.log(sum);

if (sum % 2 == 0) {
    console.log("The number is even.")
}

else {
    console.log("The number is odd.");
}