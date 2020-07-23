            // Short description:
            // Create 2 2D-arrays with the input values for the grid size (x, y)
            // GRID-1 will hold the values of each cell, GRID-2 will hold objects that manage the logic for each cell in the next generation.
            // Iterate over each object in GRID-2, to set nextGenValue based on the current values of GRID1. 
            // Use nextGenValue to form the next generation


const { applyRules, formNextGeneration } = require('./utils/rules');
const { initGrid, initObjectGrid, fillY } = require('./utils/initGrid');


//input values
let x = 4; //width
let y = 4; //length
let yLines = ['1001', '1111', '0100', '1010']; // y lines strings
let x1 = 2; // cell coordinates
let y1 = 2; // cell coordinates
let N = 15; // generations


//create initial grid for cell values and another grid for objects
let grid = initGrid(x, y);
let objectGrid = initObjectGrid(x, y);
// use yLines to form Generation Zero
let genZero = fillY(grid, yLines);


//iterate grid to form generations, get values for next generation based on rules, create next generation
const formGenerations = () => {
    for (let i = 0; i < N; i++) {
        applyRules(objectGrid, genZero); // check rules and set nextGenValue in object
        formNextGeneration(objectGrid, genZero) // use nextGenValue to create next generation (mutate genZero)
    }
    let result = objectGrid[y1][x1].greenCounter; //return counter value after N generations
    console.log(`For ${N} generations, cell with coordinates ${x1}x${y1} was green ${result} times!`);
};


formGenerations();
