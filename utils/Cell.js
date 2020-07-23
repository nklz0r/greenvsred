// Class that determines the next generation and keeps track of green counter
class Cell {
    constructor() {
        this.nextGenValue = 0;
        this.greenCounter = 0;
    }

    getNextGenValue() {
        return this.nextGenValue;
    }

    setNextGenValue(value) {
        this.nextGenValue = value;
    }

    increaseCounter() {
        this.greenCounter++;
    }
};



module.exports = Cell;
