/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    *****************
*/

function Dijkstra()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O((V + E) log V)";
    document.getElementById("Time_Average").innerText="Θ((V + E) log V)";
    document.getElementById("Time_Best").innerText="Ω((V + E) log V)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(V)";

    // Dijkstra's implementation
    var dist = new Array(array_size).fill(Infinity);
    var visited = new Array(array_size).fill(false);
    dist[0] = 0; // start node has distance 0

    for (var i = 0; i < array_size; i++) {
        var u = getMinDist(dist, visited); // Find node with minimum distance
        visited[u] = true;
        div_update(divs[u], div_sizes[u], "green"); // Visit node

        for (var neighbor of graph[u]) {
            if (!visited[neighbor] && dist[u] + weight[u][neighbor] < dist[neighbor]) {
                dist[neighbor] = dist[u] + weight[u][neighbor];
                div_update(divs[neighbor], div_sizes[neighbor], "yellow"); // Visit neighbors
            }
        }
    }

    enable_buttons();
}
