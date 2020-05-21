import {Field} from './field';
import {Cell} from './cell';
import {Renderer} from './renderer';

export class Game {
    field = null;
    renderer = null;
    bombsCount = difficulty;
    plantedBombs = [];

    constructor(height, width) {
        this.field = new Field(width, height);
    }

    planting() {
        let bombPosition = Math.floor(Math.random() * (this.field.width * this.field.height));
        let bombPositionX = Math.trunc(bombPosition / this.field.width);
        let bombPositionY = bombPosition % this.field.width;
        for (let i = 0; i < this.bombsCount; i++) {
            this.plantedBombs.push([bombPositionX, bombPositionY]);
        }
        return this.plantedBombs;
    }

    start(){
        Renderer.render();
        Field.fill();
    }
}

const difficulty = 5;