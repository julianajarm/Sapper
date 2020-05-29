export class Cell {
    constructor(planted) {
        this.hasBomb = !!planted;
        this.isOpen = false;
        this.isMarked = false;
    }

    getHasBomb() {
        return this.hasBomb;
    }

    getIsOpen() {
        return this.isOpen;
    }

    open() {
        this.isOpen = true;
        return this.hasBomb;
    }

    mark() {
        this.isMarked = true;
    }

    unmark(){
        this.isMarked = false;
        return this.isMarked;
    }

    getIsMarked() {
        return this.isMarked;
    }

    // getter+setter 2in1
    bombsAround(count) {
        if (count !== undefined) {
            this.count = count;
        }
        return this.count;
    }
}


