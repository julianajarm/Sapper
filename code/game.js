import {Field} from './field.js';
import {Renderer} from './renderer.js';

export class Game {
    bombsCount = difficulty;

    constructor(height, width) {
        this.field = new Field(width, height);
        this.renderer = new Renderer();
    }

    planting() {
        let plantedBombs = [];
        let positions = [];
        for (let i = 0; i < this.bombsCount; i++) {
            let bombPosition = Math.floor(Math.random() * (this.field.width * this.field.height));
            for (let i = 0; i < positions.length; i++) {
                if (positions.includes(bombPosition)) {
                    bombPosition += 1;
                } else {
                    break;
                }
                if (bombPosition === this.field.width * this.field.height){
                    bombPosition = 0;
                }
            }
            positions.push(bombPosition);
            let bombPositionX = Math.trunc(bombPosition / this.field.width);
            let bombPositionY = bombPosition % this.field.width;
            plantedBombs.push([bombPositionX, bombPositionY]);
        }
        return plantedBombs;
    }

    start(){
        this.field.fill(this.planting());
        this.callRender();
    }

    makeMove(cell, i, j, action) {
        if (action === 'rightClick') {
            if (cell.getIsMarked()) {
                cell.unmark();
                this.callRender();
            } else {
                this.markCell(cell);
            }
        } else if (action === 'click') {
            this.openCell(cell, i, j);
        }
    }

    openCell(cell, i, j){
        let exploded = cell.open();
        if (exploded) {
            confirm('vi proebali');
            this.renderer.clear();
            return;
        }
        cell.bombsAround(this.countClosestBombs(i,j));
        this.callRender();
    }

    markCell(cell) {
        cell.mark();
        this.callRender();
    }

    countClosestBombs(i, j){
        let bombs = 0;
        for( let x = - 1; x <= 1; x++) {
            for( let y = -1; y <= 1; y++) {
                let closest = this.field.cell(i+x, j+y);
                if (closest !== undefined && closest.getHasBomb()) {
                    bombs += 1;
                }
            }
        }
        return bombs;
    }

    callRender() {
        this.renderer.clear();
        this.renderer.render(this.field, (cell, i, j, action) => this.makeMove(cell, i, j, action));
    }
}

// todo по клику на пустой показывать, сколько соседей с бомбами
// todo завершать игру при взрыве бомбы
// todo счетчик, сколько осталось мин, возможно, также и секундомер
const difficulty = 8;

let game = new Game(6, 6);
game.start();
