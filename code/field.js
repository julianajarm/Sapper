import {Cell} from './cell.js';
// import {Game} from './game';
// import {Renderer} from './renderer';

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

}

const defaultMapWidth = 10;
const defaultMapHeight = 10;