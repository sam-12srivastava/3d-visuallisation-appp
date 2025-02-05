/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/

function Knapsack()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N*W)";
    document.getElementById("Time_Average").innerText="Θ(N*W)";
    document.getElementById("Time_Best").innerText="Ω(N*W)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N*W)";

    c_delay=0;

    let result = knapSack(W, weights, values, weights.length);

    enable_buttons();
}

function knapSack(W, weights, values, n) {
    let K = Array(n+1).fill().map(() => Array(W+1).fill(0));

    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (i == 0 || w == 0)
                K[i][w] = 0;
            else if (weights[i - 1] <= w)
                K[i][w] = Math.max(values[i - 1] + K[i - 1][w - weights[i - 1]], K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }

    return K[n][W];
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/
