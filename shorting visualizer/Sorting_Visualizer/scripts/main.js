// // /*
// //     *****************
// //     DONE BY:-   TUMMALA KETHAN
    
// //     *****************
// // */

// // /*
// // Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
// // */

// // //Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
// // var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
// // var inp_gen=document.getElementById("a_generate");
// // var inp_aspeed=document.getElementById("a_speed");
// // //var array_speed=document.getElementById('a_speed').value;

// // var butts_algos=document.querySelectorAll(".algos button");

// // var div_sizes=[];
// // var divs=[];
// // var margin_size;
// // var cont=document.getElementById("array_container");
// // cont.style="flex-direction:row";

// // //Array generation and updation.

// // inp_gen.addEventListener("click",generate_array);
// // inp_as.addEventListener("input",update_array_size);

// // function generate_array()
// // {
// //     cont.innerHTML="";

// //     for(var i=0;i<array_size;i++)
// //     {
// //         div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
// //         divs[i]=document.createElement("div");
// //         cont.appendChild(divs[i]);
// //         margin_size=0.1;
// //         divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
// //     }
// // }

// // function update_array_size()
// // {
// //     array_size=inp_as.value;
// //     generate_array();
// // }

// // window.onload=update_array_size();

// // //Running the appropriate algorithm.
// // for(var i=0;i<butts_algos.length;i++)
// // {
// //     butts_algos[i].addEventListener("click",runalgo);
// // }

// // function disable_buttons()
// // {
// //     for(var i=0;i<butts_algos.length;i++)
// //     {
// //         butts_algos[i].classList=[];
// //         butts_algos[i].classList.add("butt_locked");

// //         butts_algos[i].disabled=true;
// //         inp_as.disabled=true;
// //         inp_gen.disabled=true;
// //         inp_aspeed.disabled=true;
// //     }
// // }

// // function runalgo()
// // {
// //     disable_buttons();

// //     this.classList.add("butt_selected");
// //     switch(this.innerHTML)
// //     {
// //         case "Bubble":Bubble();
// //                         break;
// //         case "Selection":Selection_sort();
// //                         break;
// //         case "Insertion":Insertion();
// //                         break;
// //         case "Merge":Merge();
// //                         break;
// //         case "Quick":Quick();
// //                         break;
// //         case "Heap":Heap();
// //                         break;
                        
// //     }
// // }

// // /*
// //     *****************
// //     DONE BY:-   TUMMALA KETHAN
    
// //     *****************
// // */



// /*
//     *****************
//     DONE BY:-   TUMMALA KETHAN
//     *****************
// */

// // Variables








// var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
// var inp_gen = document.getElementById("a_generate");
// var inp_aspeed = document.getElementById("a_speed");
// var butts_algos = document.querySelectorAll(".algos button");

// var div_sizes = [];
// var divs = [];
// var margin_size;
// var cont = document.getElementById("array_container");
// cont.style = "flex-direction:row";

// // Array generation and updating
// inp_gen.addEventListener("click", generate_array);
// inp_as.addEventListener("input", update_array_size);

// function generate_array() {
//     cont.innerHTML = "";  // Clear container

//     for (var i = 0; i < array_size; i++) {
//         div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
//         divs[i] = document.createElement("div");
//         cont.appendChild(divs[i]);
//         margin_size = 0.1;
//         divs[i].style = "margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
//     }
// }

// function update_array_size() {
//     array_size = inp_as.value;
//     generate_array();
// }

// window.onload = update_array_size();

// // // // Event listener for algorithm buttons
// for (var i = 0; i < butts_algos.length; i++) {
//     butts_algos[i].addEventListener("click", runalgo);
// }

// function disable_buttons() {
//     for (var i = 0; i < butts_algos.length; i++) {
//         butts_algos[i].classList = [];
//         butts_algos[i].classList.add("butt_locked");

//         butts_algos[i].disabled = true;
//         inp_as.disabled = true;
//         inp_gen.disabled = true;
//         inp_aspeed.disabled = true;
//     }
// }

// function enable_buttons() {
//     window.setTimeout(function () {
//         for (var i = 0; i < butts_algos.length; i++) {
//             butts_algos[i].classList = [];
//             butts_algos[i].classList.add("butt_unselected");

//             butts_algos[i].disabled = false;
//             inp_as.disabled = false;
//             inp_gen.disabled = false;
//             inp_aspeed.disabled = false;
//         }
//     }, c_delay += delay_time);
// }

// // // Algorithm runner
// function runalgo() {
//     disable_buttons();

//     this.classList.add("butt_selected");
//     switch (this.innerHTML) {
//         case "Bubble": Bubble(); break;
//         case "Selection": Selection_sort(); break;
//         case "Insertion": Insertion(); break;
//         case "Merge": Merge(); break;
//         case "Quick": Quick(); break;
//         case "Heap": Heap(); break;
//         case "BFS": BFS(); break;
//         case "DFS": DFS(); break;
//         case "Dijkstra's": Dijkstra(); break;
//         case "Prim's MST": PrimsMST(); break;
//         case "Floyd-Warshall": FloydWarshall(); break;
//         case "Monte Carlo Simulation": MonteCarlo(); break;
//         case "Knapsack": Knapsack(); break;
//         case "N-Queen": NQueen(); break;
//         case "Traveling Salesman": TravelingSalesman(); break;
//         case "Maze Generation": MazeGeneration(); break;
//     }
// }




var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
var butts_algos = document.querySelectorAll(".algos button"); // Selecting all buttons

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

// Array generation and updating
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";  // Clear container

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = "margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

// Add event listeners to all buttons
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}

function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < butts_algos.length; i++) {
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }, 1000);
}

// Algorithm runner
function runalgo() {
    disable_buttons();
    this.classList.add("butt_selected");
    
    switch (this.innerHTML) {
        case "Bubble": Bubble(); break;
        case "Selection": Selection_sort(); break;
        case "Insertion": Insertion(); break;
        case "Merge": Merge(); break;
        case "Quick": Quick(); break;
        case "Heap": Heap(); break;
        case "Maze Generation": MazeGeneration(); break;
        case "Traveling Salesman": TravelingSalesman(); break;
        case "Knapsack": Knapsack(); break;
        case "N-Queen": NQueen(); break;
        case "Monte Carlo Simulation": MonteCarlo(); break;
    }
}

// Define your algorithm functions
function Bubble() { console.log("Running Bubble Sort"); }
function Selection_sort() { console.log("Running Selection Sort"); }
function Insertion() { console.log("Running Insertion Sort"); }
function Merge() { console.log("Running Merge Sort"); }
function Quick() { console.log("Running Quick Sort"); }
function Heap() { console.log("Running Heap Sort"); }

function MazeGeneration() { console.log("Running Maze Generation"); }
function TravelingSalesman() { console.log("Running Traveling Salesman"); }
function Knapsack() { console.log("Running Knapsack Algorithm"); }
function NQueen() { console.log("Running N-Queen Algorithm"); }
function MonteCarloSimulation() { console.log("Running Monte Carlo Simulation"); }
function BFS(){console.log("Running Binary First Search Algorithm")};
function DFS(){console.log("Running Depth First Search Algorithm")};
function Dijkstra(){console.log(" Running Dijkstra's Algorithm")};
// function HuffmanCoding(){console.log("Huffman Algorithm")};
function PrimsMST(){console.log("Running Prim's MST Algorithm")};
function FloydWarshall(){console.log("Running Floyd Warshall Algorithm")};

