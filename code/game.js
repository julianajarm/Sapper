import {Field} from './field.js';
import {Cell} from './cell.js';
import {Renderer} from './renderer.js';

export class Game {
    bombsCount = difficulty;

    constructor(height, width) {
        this.field = new Field(width, height);
        this.renderer = new Renderer();
    }

    //todo: create an temporary array for bombPosition results only, it will make search easier
    //fixme: two bombs can be pushed to same position more than once, create a check and fix it with +1
    planting() {
        let plantedBombs = [];
        for (let i = 0; i < this.bombsCount; i++) {
            let bombPosition = Math.floor(Math.random() * (this.field.width * this.field.height));
            let bombPositionX = Math.trunc(bombPosition / this.field.width);
            let bombPositionY = bombPosition % this.field.width;
            plantedBombs.push([bombPositionX, bombPositionY]);
        }
        return plantedBombs;
    }

    start(){
        this.field.fill(this.planting());
        this.renderer.render(this.field);
    }

    makeMove(){
        this.renderer.render(this.field);
    }
}

const difficulty = 5;

let game = new Game(10, 10);
game.start();
