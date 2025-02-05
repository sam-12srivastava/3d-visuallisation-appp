/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    *****************
*/

function BFS()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(V + E)";
    document.getElementById("Time_Average").innerText="Θ(V + E)";
    document.getElementById("Time_Best").innerText="Ω(V + E)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(V)";

    // BFS implementation
    var queue = [];
    var visited = new Array(array_size).fill(false);
    
    queue.push(0); // start with node 0
    visited[0] = true;

    while (queue.length > 0) {
        var node = queue.shift();
        div_update(divs[node], div_sizes[node], "green"); // Visit node

        for (var neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                div_update(divs[neighbor], div_sizes[neighbor], "yellow"); // Visit neighbors
                queue.push(neighbor);
            }
        }
    }

    enable_buttons();
}
