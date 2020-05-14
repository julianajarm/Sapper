class Field {
    width = defaultMapWidth;
    height = defaultMapHeight;
    cells = [];

    constructor(width, height) {
        if (width > 0) {
            this.width = width;
        }
        if (height > 0) {
            this.height = height;
        }
    }

    fill() {
        for (let i = 0; i < this.height; i++){
            let row = [];
            for(let j = 0; j < this.width; j++) {
                row.push(new Cell(false));
            }
            this.cells.push(row);
        }
    }

}

const defaultMapWidth = 10;
const defaultMapHeight = 10;