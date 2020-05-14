class Game {
    field = null;
    renderer = null;
    bombsCount = difficulty;

    constructor(height, width) {
        this.field = new Field(width, height);
    }

    planting() {
        let plantedBombs = [];
        let bombPosition = Math.floor(Math.random() * (this.field.width * this.field.height));
        let bombPositionX = Math.trunc(bombPosition / this.field.width);
        let bombPositionY = bombPosition % this.field.width;
        return [bombPositionX, bombPositionY];
    }

    start(){
        this.renderer.render();
    }
}

const difficulty = 5;