// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.speed = 0;
//     }
//
//     run(speed) {
//         this.speed = speed;
//         if (speed === 0) {
//             this.stop();
//         } else {
//         console.log(`${this.name} is running as fast as ${speed} kmph`);
//         }
//     }
//
//     stop() {
//         console.log(`${this.name} is standing still`);
//     }
// }
//
// class Rabbit extends Animal {
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }
//     hide(){
//         super.speed = 0;
//         console.log(`${this.name} is hiding`);
//     }
//     stop(){
//         super.stop();
//         this.hide();
//     }
// }
// new Animal('cat')
//
// let rabbit = new Rabbit('percy', 10);
// console.log(Rabbit);
// rabbit.run(0);


/*
Создайте новый класс ExtendedClock, который будет наследоваться от Clock и
добавьте параметр precision – количество миллисекунд между «тиками».
Установите значение в 1000 (1 секунда) по умолчанию.
 */

// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
//
// class ExtendedClock extends Clock {
//     constructor(options) {
//         super(options);
//         let { precision = 1000 } = options;
//         this.precision = precision;
//     }
//
//     start(){
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
// // }
//

// // Строки должны	нумероваться	1	до	8,	столбцы — буквами	A,B,C,D,E,F,G,H.

function drawChessBoard() {
    let table = document.createElement('table');
    let field = document.getElementById('field');
    field.appendChild(table);

    for(let i = 0; i < 8; i++){
        let row = table.insertRow(i);

        for(let j = 0; j < 8; j++){
            let cell = row.insertCell(j);
            cell.classList.add('black');

            if (j % 2 - 1 === 0 && i % 2 - 1 === 0) {
                cell.classList.add('white');
            } else if (j % 2 === 0 && i % 2 === 0){
                cell.classList.add('white');
            }
        }
    }
}

drawChessBoard();