let input = require("fs").readFileSync('dev/stdin').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let award;
if (a == b && b == c && a == c) {
  award = 10000 + a * 1000;
} else if (a != b && b != c && a != c) {
  let big = a;
  if (big < b) {
    big = b;
    if (big < c) {
      big = c;
    }
  }
  award = big * 100;
} else {
  if (a == b || b == c) {
    award = 1000 + b * 100;
  } else {
    award = 1000 + a * 100;
  }
}

console.log(award);