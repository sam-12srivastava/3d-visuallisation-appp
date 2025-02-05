/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/

function MonteCarloSimulation()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N)";
    document.getElementById("Time_Average").innerText="Θ(N)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    let pi_estimate = monteCarlo(1000000);  // Run simulation with 1 million samples

    enable_buttons();
}

function monteCarlo(samples) {
    let inside_circle = 0;
    
    for (let i = 0; i < samples; i++) {
        let x = Math.random();
        let y = Math.random();
        if (x*x + y*y <= 1) {
            inside_circle++;
        }
    }

    return (4 * inside_circle / samples);  // Estimate of Pi
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/
