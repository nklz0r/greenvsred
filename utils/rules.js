//Sets values for Next Generation based on current grid
const applyRules = (objectGrid, valueGrid) => {
    for (var i = 0; i < objectGrid.length; i++) {
        var rowY = objectGrid[i];
        for (var j = 0; j < rowY.length; j++) {

            //get value of a cell, return 0 if it is outside of grid borders
            function getCell(valueGrid, i, j) {
                let NO_VALUE = 0;
                let value, hasValue;

                try {
                    hasValue = valueGrid[i][j] !== undefined;
                    value = hasValue ? valueGrid[i][j] : NO_VALUE;
                } catch (e) {
                    value = NO_VALUE;
                }
                return value;
            }

            //get values from all surrounding cells
            let neighbors = [getCell(valueGrid, i - 1, j - 1), getCell(valueGrid, i - 1, j), getCell(valueGrid, i - 1, j + 1), getCell(valueGrid, i, j - 1), getCell(valueGrid, i, j + 1), getCell(valueGrid, i + 1, j - 1), getCell(valueGrid, i + 1, j), getCell(valueGrid, i + 1, j + 1)]

            // get the sum of surrounding cells in order to count number of green cells
            let totalSum = neighbors.reduce((a, b) => {
                return a + b;
            });

            // Decide if current cell should change, based on sum of green cells around it
            const conditionRedToGreen = () => {
                if (totalSum === 3 || totalSum === 6) {
                    return true;
                } else {
                    return false;
                }
            }

            const conditionGreenToRed = () => {
                if (totalSum === 2 || totalSum === 3 || totalSum === 6) {
                    return false;
                } else {
                    return true;
                }
            }

            //Conditions to apply if current cell is RED
            if (valueGrid[i][j] === 0) {
                if (conditionRedToGreen()) {
                    rowY[j].setNextGenValue(1);
                    rowY[j].increaseCounter();
                } else {
                    rowY[j].setNextGenValue(0);
                }
            }
            //Conditions to apply if current cell is GREEN
            if (valueGrid[i][j] === 1) {
                if (conditionGreenToRed()) {
                    rowY[j].setNextGenValue(0);
                } else {
                    rowY[j].setNextGenValue(1);
                    rowY[j].increaseCounter();
                }
            }
        }
    }
}

// Form next generation based on object.nextGenValue
const formNextGeneration = (objectGrid, valueGrid) => {
    for (var i = 0; i < objectGrid.length; i++) {
        var rowY = objectGrid[i];
        for (var j = 0; j < rowY.length; j++) {
            valueGrid[i][j] = Number(rowY[j].getNextGenValue());
        }
    }
}


module.exports = {
    applyRules,
    formNextGeneration
}