import {Field} from './field';
import {Game} from './game';
import {Cell} from './cell';

export class Renderer {
    render() {
        let table = document.createElement('table');
        let field = document.getElementById('field');
        field.appendChild(table);

        for(let i = 0; i < 8; i++){
            let row = table.insertRow(i);
            for(let j = 0; j < 8; j++){
                row.insertCell(j);
                if (Cell.hasBomb) {
                    row.insertCell(j).classList.add('bomb');
                }
            }
        }
    }
}


let display = new Renderer();
display.render();