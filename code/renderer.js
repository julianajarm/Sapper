class Renderer {
    render() {
        let table = document.createElement('table');
        let field = document.getElementById('field');
        field.appendChild(table);

        for(let i = 0; i < 8; i++){
            let row = table.insertRow(i);

            for(let j = 0; j < 8; j++){
                row.insertCell(j);
                }
            }
        }
}