/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    *****************
*/

function FloydWarshall()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(V^3)";
    document.getElementById("Time_Average").innerText="Θ(V^3)";
    document.getElementById("Time_Best").innerText="Ω(V^3)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(V^2)";

    var dist = [];
    for (var i = 0; i < array_size; i++) {
        dist[i] = [];
        for (var j = 0; j < array_size; j++) {
            if (i == j) dist[i][j] = 0;
            else if (graph[i][j] != 0) dist[i][j] = graph[i][j];
            else dist[i][j] = Infinity;
        }
    }

    for (var k = 0; k < array_size; k++) {
        for (var i = 0; i < array_size; i++) {
            for (var j = 0; j < array_size; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    div_update(divs[i], div_sizes[i], "yellow");
                }
            }
        }
    }

    enable_buttons();
}
