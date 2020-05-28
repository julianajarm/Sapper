export class Renderer {
    render(field, handleClick) {
        let table = document.createElement('table');
        table.setAttribute('id','table');
        let fieldDiv = document.getElementById('field');
        fieldDiv.appendChild(table);
        for(let i = 0; i < field.height; i++){
            let row = table.insertRow(i);
            for(let j = 0; j < field.width; j++){
                let cell = field.cell(i, j);
                let cellClass = this.getCellClass(cell);
                let td = row.insertCell(j)
                td.classList.add(cellClass);
                td.addEventListener("click", () => {
                    handleClick(cell, i, j);
                });
            }
        }
    }
    clear(){
        document.getElementById('field').innerHTML = '';
    }
    getCellClass(cell){
        let styleClass = '';
        if (!cell.getIsOpen()) {
            return 'closed';
        }
        if(cell.getHasBomb()){
            styleClass = 'bomb';
        } else {
            styleClass = 'empty';
        }
        return styleClass;
    }
}
