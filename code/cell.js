export class Cell {
    constructor(planted) {
        this.hasBomb = !!planted;
        this.isOpen = false;
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

    bombsAround(){

        return count;
    }

}
