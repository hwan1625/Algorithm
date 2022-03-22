let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, ...items] = input;
const sorted = items.sort((a, b) => a.length - b.length || a.localeCompare(b));
const uniqueValues = new Set(sorted);
console.log(Array.from(uniqueValues).join('\n'));