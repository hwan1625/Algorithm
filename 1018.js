let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let size_y = Number(input[0].split(" ")[0]);
let size_x = Number(input[0].split(" ")[1]);

// 입력 보드
let input_board = [];
for (let i = 1; i < input.length; i++) {
	input_board[i - 1] = input[i].substring(0, size_x);
}

// W시작라인, B시작라인
let firstLine_W = "W";
let firstLine_B = "B";
for (let i = 0; i < 8; i++) {
	if (i % 2 == 0) {
		firstLine_W += "B";
		firstLine_B += "W";
	} else {
		firstLine_W += "W";
		firstLine_B += "B";
	}
}

// 완성 보드
let board_W = [firstLine_W];
let board_B = [firstLine_B];
for (let i = 1; i < 8; i++) {
	if (i % 2 == 0) {
		board_W[i] = firstLine_W;
		board_B[i] = firstLine_B;
	} else {
		board_W[i] = firstLine_B;
		board_B[i] = firstLine_W;
	}
}

// 보드 비교
let start_x = 0;
let start_y = 0;
let diff_count_W = [];
let diff_count_B = [];
diff_count_B.length = (size_x-7)*(size_y-7);
diff_count_B.fill(0);
diff_count_W.length = (size_x-7)*(size_y-7);
diff_count_W.fill(0);
for(let k = 0; k < diff_count_W.length; k++) {
    if(start_x == size_x-7) {
        start_x = 0;
        start_y++;
    }
    for(let j = start_y; j < start_y+8; j++) {
        for(let i = start_x; i < start_x+8; i++) {
            if(board_W[j-start_y][i-start_x] != input_board[j][i]) {
                diff_count_W[k]++;
            }
            if(board_B[j-start_y][i-start_x] != input_board[j][i]) {
                diff_count_B[k]++;
            }
        }
    }
    start_x++;
}
let min_W = Math.min.apply(null, diff_count_W);
let min_B = Math.min.apply(null, diff_count_B);
console.log(min_W < min_B ? min_W : min_B);