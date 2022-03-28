let input = require("fs").readFileSync("/dev/stdin","utf8").toString().trim().split("").map(d => Number(d));
console.log(input.sort((a,b) => b-a).join(""));