function buildGrid(cols, rows, mines) {
    let board = {} ;
    let rand = Math.floor(Math.random() * (1 - 1 + 10)) + 1 // 1 <= x <= 10
    let countMines = 0;

    for (let i = 1; i <= cols+1; i++) {
        if(!board[i]) {
            board[i] = {};
        }
        for (let j = 1; j <= rows+1; j++) {

            board[i][j] = 0;
            if (countMines <= mines) {
                board[i][j] = -1;
                // upper line
                //if(!board[i-1][j-1]) {
                    board[i-1][j-1] = 0;
            //    }
                board[i-1][j-1]++;
                board[i-1][j]++;
                board[i-1][j+1]++;
                // same line
                board[i][j-1]++;
                board[i][j+1]++;
                // lower line
                board[i+1][j-1]++;
                board[i+1][j+1]++;
                board[i+1][j]++;
                // make sure the mines are as requested
                countMines++;
            }
        }
    }
    return board;
}

console.log(buildGrid(5,2,1));
