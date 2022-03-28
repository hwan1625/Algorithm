let input = require("fs").readFileSync("/dev/stdin", "utf8");
let [n, ...items] = input.trim().split("\n").map(x => Number(x));
items.sort((a, b) => a - b);
console.log(items.join("\n"));
