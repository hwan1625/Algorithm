let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let items = [];
for (let i = 0; i < n; i++) {
	items[i] = Number(input[i+1]);
}

items.sort((a, b) => a - b);
items.forEach(item => console.log(item));
