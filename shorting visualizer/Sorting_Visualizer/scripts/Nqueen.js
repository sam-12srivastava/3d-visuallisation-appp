/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/

function NQueen()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N!)";
    document.getElementById("Time_Average").innerText="Θ(N!)";
    document.getElementById("Time_Best").innerText="Ω(N!)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;

    solveNQ();

    enable_buttons();
}

function solveNQ() {
    let board = Array(N).fill().map(() => Array(N).fill(0));
    if (solveNQUtil(board, 0) == false) {
        console.log("Solution does not exist");
        return false;
    }
    return true;
}

function solveNQUtil(board, col) {
    if (col >= N) return true;

    for (let i = 0; i < N; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQUtil(board, col + 1)) return true;
            board[i][col] = 0;
        }
    }

    return false;
}

function isSafe(board, row, col) {
    for (let i = 0; i < col; i++) if (board[row][i]) return false;
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j]) return false;
    for (let i = row, j = col; j >= 0 && i < N; i++, j--) if (board[i][j]) return false;

    return true;
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/
