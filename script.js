let arr = prompt("Enter a list of numbers of your choice: (for example: 1 2 -44 68 39)").split(" ");
let res = [];

for (let num of arr) {
    res.push(Number(num));
}

console.log(Math.min(...res));