function populateBoard(size) {
  let board = document.querySelector('.board');
  board.style.gridTemplateColumns = `repeat(${size}, 1frs)`;
  board.style.gridTemplateRows = `repeat(${size}, 1frs)`;
  
  for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = 'blue';
    board.insertAdjacentElement('beforeend', square);
  }
}
populateBoard(16);

function changeSize (input) {
populateBoard(input);
}















