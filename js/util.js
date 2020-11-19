
'use srict'
function buildBoard() {

    var board = [];
    for (var i = 0; i < gLevel.size; i++) {
        board[i] = [];
        for (var j = 0; j < gLevel.size; j++) {

            board[i][j] = {
                isMine: false,
                isShow: false,
                isMarked: false,
                minesAroundCount: 0
            };

        }
    }
    for (i = 0; i < gLevel.mines; i++) {
        getRandomMine(board);
    }
    setMinesNegCount(board);
    return board;
}
//render the board in table
function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var className = 'cell';
            strHtml += `<td data-i="${i}" data-j="${j}"
            onmouseup="cellClicked(this,${i},${j},event)"
             class="${className}"></td>`
        }
        strHtml += '</tr>'
    }

    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHtml
}
function getRandomEmpty(board) {
    var emptys = [];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j]
            if (cell.isMine === false) {
                emptys.push({ i: i, j: j })

            }
        }
    }
    return emptys;

}
  function showInBoard(i,j,value){
    var elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`)
    elCell.innerText = value
}

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}