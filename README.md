# Algorithm
코딩 테스트를 위한 알고리즘 공부 저장소

### 백준저지 언어가이드에 있는 Node.js 인터페이스 정의
```
let input = require("fs").readFileSync("/dev/stdin", "utf8").toString().split('\n');
```

### Node.js 2751번 시간초과 해결법
console.log 자체가 매운 느리기 때문에 결과값 출력시 배열 join을 사용하여 하나의 문자열로 출력한다.
```
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let [firstLine, ...data] = input.trim().split("\n").map(v => Number(v));
let output = data.sort((a, b) => a - b);
console.log(output.join("\n"));
```
