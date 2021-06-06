/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать 
любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, 
т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/
"use strict";

function chessBoard() {
    let table = document.createElement("table");
    const literal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let i = 0; i <= 8; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j <= 8; j++) {
            let td = document.createElement('td');
            if (j == 0) {
                td.style.border = 0;
                if (i != 0)
                    td.innerText = i;
                    td.className = "white";
            }
            else if (i == 0 && j != 0) {
                td.innerText = literal[j - 1];
                td.className = "white";
                td.style.border = 0;
            }
            else if (i % 2 == j % 2) {
                td.className = "white";
            }
            else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}


document.body.appendChild(chessBoard());
