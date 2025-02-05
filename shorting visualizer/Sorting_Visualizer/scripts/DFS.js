/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    *****************
*/

function DFS()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(V + E)";
    document.getElementById("Time_Average").innerText="Θ(V + E)";
    document.getElementById("Time_Best").innerText="Ω(V + E)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(V)";

    // DFS implementation
    var visited = new Array(array_size).fill(false);

    function dfs_helper(node) {
        visited[node] = true;
        div_update(divs[node], div_sizes[node], "green"); // Visit node

        for (var neighbor of graph[node]) {
            if (!visited[neighbor]) {
                div_update(divs[neighbor], div_sizes[neighbor], "yellow"); // Visit neighbors
                dfs_helper(neighbor);
            }
        }
    }

    dfs_helper(0); // start DFS from node 0

    enable_buttons();
}
