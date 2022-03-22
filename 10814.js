const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();
const indexArr = [];
const splited = input.map(item => item.split(' '));

for (let i = 0; i < input.length; i++) {
  indexArr.push([parseInt(splited[i][0]), splited[i][1], i]);
}

let results = '';
indexArr
    .sort((a, b) => a[0] - b[0] || a[2] - b[2])
    .forEach(list => (results += `${list[0]} ${list[1]}\n`));

console.log(results);