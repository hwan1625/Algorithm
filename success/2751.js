// let input = require("fs").readFileSync("/dev/stdin", "utf8");
// let [firstLine, ...items] = input.trim().split("\n").map(v => Number(v));

// function mergeSort(array) {
//   if (array.length < 2) return array;
//   let pivot = Math.floor(array.length / 2);
//   let left = array.slice(0, pivot);
//   let right = array.slice(pivot, array.length);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   while (left.length) result.push(left.shift());
//   while (right.length) result.push(right.shift());
//   return result;
// };

// console.log(mergeSort(items).join("\n"));

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let [firstLine, ...data] = input.trim().split("\n").map(v => Number(v));
let output = data.sort((a, b) => a - b);

console.log(output.join("\n"));
