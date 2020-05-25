import {Field} from './field.js';
// import {Game} from './game';
import {Cell} from './cell.js';

export class Renderer {
    render(field) {
        let table = document.createElement('table');
        let fieldDiv = document.getElementById('field');
        fieldDiv.appendChild(table);

        for(let i = 0; i < field.height; i++){
            let row = table.insertRow(i);

            for(let j = 0; j < field.width; j++){
                let styleClass = 'empty';
                let cell = field.cells[i][j];
                if(cell.getHasBomb()){
                    styleClass = 'bomb';
                }
                row.insertCell(j).classList.add(styleClass);
            }
        }
    }
}
