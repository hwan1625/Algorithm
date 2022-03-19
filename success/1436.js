let input = require("fs").readFileSync("/dev/stdin").toString();

let jongmal = [];
let num = 0;
for(let i = 666; num < Number(input); i++) {
    if(String(i).includes("666")) {
        jongmal[num++] = i;
    }
}
console.log(jongmal[num-1]);