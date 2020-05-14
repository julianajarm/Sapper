class Cell {
    isOpen = false;
    hasBomb = false;

    constructor(planted) {
        this.hasBomb = !!planted;
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

}