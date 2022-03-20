let input = require("fs").readFileSync("/dev/stdin", "utf8");
let [n, ...items] = input.trim().split("\n").map(x => Number(x));

// 카운팅 배열 생성
let count_arr = new Array(Math.max(...items) + 1);
count_arr.fill(0);
items.forEach(item => count_arr[item]++);

// 카운팅 합
for (let i = 1; i < count_arr.length; i++) {
  count_arr[i] += count_arr[i - 1];
}

// 카운팅 정렬
let sorted = new Array(count_arr.length);
items.forEach(item => sorted[--count_arr[item]] = item);

console.log(sorted.join("\n"));