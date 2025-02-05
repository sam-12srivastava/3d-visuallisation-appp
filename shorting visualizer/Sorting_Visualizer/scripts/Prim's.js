/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    *****************
*/

function PrimsMST()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O((V + E) log V)";
    document.getElementById("Time_Average").innerText="Θ((V + E) log V)";
    document.getElementById("Time_Best").innerText="Ω((V + E) log V)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(V)";

    var key = new Array(array_size).fill(Infinity);
    var mstSet = new Array(array_size).fill(false);
    var parent = new Array(array_size).fill(-1);

    key[0] = 0;

    for (var i = 0; i < array_size - 1; i++) {
        var u = getMinKey(key, mstSet);
        mstSet[u] = true;
        div_update(divs[u], div_sizes[u], "green"); // Include u in MST

        for (var neighbor of graph[u]) {
            if (!mstSet[neighbor] && weight[u][neighbor] < key[neighbor]) {
                parent[neighbor] = u;
                key[neighbor] = weight[u][neighbor];
                div_update(divs[neighbor], div_sizes[neighbor], "yellow");
            }
        }
    }

    enable_buttons();
}
