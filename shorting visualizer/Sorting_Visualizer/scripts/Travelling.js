/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/

function TravellingSalesman()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O((N-1)!)";
    document.getElementById("Time_Average").innerText="Θ((N-1)!)";
    document.getElementById("Time_Best").innerText="Ω((N-1)!)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;

    let result = tsp(0, [], 0, Number.MAX_SAFE_INTEGER); // Start TSP with initial city 0

    enable_buttons();
}

function tsp(pos, visited, cost, min_cost) {
    if (visited.length == cities.length) {
        return Math.min(min_cost, cost + distance[pos][0]);
    }

    for (let i = 0; i < cities.length; i++) {
        if (!visited.includes(i)) {
            visited.push(i);
            min_cost = tsp(i, visited, cost + distance[pos][i], min_cost);
            visited.pop();
        }
    }
    return min_cost;
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/
