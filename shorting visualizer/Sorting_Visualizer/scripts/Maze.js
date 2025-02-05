/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/

function MazeGeneration()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N*M)";
    document.getElementById("Time_Average").innerText="Θ(N*M)";
    document.getElementById("Time_Best").innerText="Ω(N*M)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(N*M)";

    c_delay=0;

    generate_maze(0, 0); // Start maze generation from (0,0)

    enable_buttons();
}

function generate_maze(x, y)
{
    // Recursive DFS to generate the maze
    let directions = shuffle([[-1, 0], [1, 0], [0, -1], [0, 1]]); // Shuffle directions

    for (let [dx, dy] of directions) {
        let nx = x + dx * 2, ny = y + dy * 2;
        if (in_bounds(nx, ny) && grid[nx][ny] == 1) {
            grid[x + dx][y + dy] = 0;  // Break the wall
            grid[nx][ny] = 0;          // Make the path
            generate_maze(nx, ny);
        }
    }
}

// Utility function to check if coordinates are inside the grid
function in_bounds(x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/
