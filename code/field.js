import {Cell} from './cell.js';

const defaultMapWidth = 10;
const defaultMapHeight = 10;

export class Field {
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

    //plantedMap = [[x,y],[x,y]]
    fill(plantedMap) {
        for (let i = 0; i < this.height; i++){
            let row = [];
            for(let j = 0; j < this.width; j++) {
                let planted = false;
                let found = plantedMap.find(el => el[0] === j && el[1] === i);
                if(found !== undefined) {
                    planted = true;
                }
                row.push(new Cell(planted));
            }
            this.cells.push(row);
        }
    }

    cell(i, j) {
        if (i < 0 || j < 0 || i >= this.height || j >= this.width) {
            return undefined;
        }
        return this.cells[i][j];
    }
}
