Array.prototype.equals = function (anotherArray) {
    return this.toString() === anotherArray.toString()
  }
  
  window.onload = () => {
    generateBoardSquares();
  }
  
  const board = [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8]
                ];
  
  const boardSize = 9;
  
  // Players
  const p1 = {
    symbol: 'X',
    markedSquares: [[0, 0, 0], 
                    [0, 0, 0], 
                    [0, 0, 0]]
  }
  
  const p2 = {
    symbol: 'O',
    markedSquares: [[0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]]
  }
  
  let currentPlayer = p1;
  
  function togglePlayer() {
    if (currentPlayer === p1) {
      currentPlayer = p2;   
    } else {
      currentPlayer = p1;
    }
  }
  
  function restartGame() {
    for (let boardLine of board) {
      for (let boardSquare of boardLine) {
        const boardSquareEl = document.querySelector(`#board-square-${boardSquare}`); 
        boardSquareEl.parentNode.removeChild(boardSquareEl);
      }
    }
    
    for (let p1MarkedSquares of p1.markedSquares) {
      p1MarkedSquares.fill(0);
    }
    
    for (let p2MarkedSquares of p2.markedSquares) {
      p2MarkedSquares.fill(0);
    }
    
    generateBoardSquares();
  }
  
  function generateBoardSquares() { 
    const boardSquares = [];
    
    for (let i = 0; i < boardSize; i++) {
      const newBoardSquare = document.createElement('div');
      newBoardSquare.setAttribute('class', 'board-square');
      newBoardSquare.setAttribute('id', `board-square-${i}`);
      newBoardSquare.setAttribute('marked', 'false');
      newBoardSquare.setAttribute('onclick', `markBoardSquare(${i})`);
      boardSquares.push(newBoardSquare);
    }
    
    for (let boardSquare of boardSquares) {
        document.querySelector('#board').appendChild(boardSquare);
    }
    
  }
  
  function isBoardFullyFilled() {
    let filledBoardSquaresQtt = 0;
    for (let boardLine of board) {
      for (let boardSquare of boardLine) {
        let boardSquareEl = document.querySelector(`#board-square-${boardSquare}`);
        if (boardSquareEl.getAttribute('marked') === 'true') {
          filledBoardSquaresQtt++;
        }
      }
    }
    
    if (filledBoardSquaresQtt === boardSize) {
      return true;
    } else {
      return false;
    }
  }
  
  function isBoardClean() {
    let nullBoardSquaresQtt = 0;
    for (let boardLine of board) {
      for (let boardSquare of boardLine) {
        let boardSquareEl = document.querySelector(`#board-square-${boardSquare}`);
        if (boardSquareEl.getAttribute('marked') === 'false') {
          nullBoardSquaresQtt++;
        }
      }
    }
    
    if (nullBoardSquaresQtt === boardSize) {
      return true;
    } else {
      return false;
    }
  }
  
  function isBoardLineFullyFilled(line) {
    let filledBoardSquaresQtt = 0;
    for (let boardSquare of board[line]) {
      if (boardSquare !== 0 && !boardSquare === board[0][0]) {
        filledBoardSquaresQtt++;
      }
    }
    
    if (filledBoardSquaresQtt === 3) {
      return true;
    } else {
      return false;
    }
  }
  
  function isBoardLineClean(line) {
    let nullBoardSquaresQtt = 0;
    for (let boardSquare of board[line]) {
      if (boardSquare === 0) {
        nullBoardSquaresQtt++;
      }
    }
    
    if (nullBoardSquaresQtt === 3) {
      return true;
    } else {
      return false;
    }
  }
  
  function isBoardSquareEmpty(boardSquareLine, boardSquareColumn) {
    if (board[boardSquareLine][boardSquareColumn] === 0) {
      return true;
    }   
  }
  
  function markBoardSquare(boardSquareId) {
    
    const currentBoardSquare = document.querySelector(`#board-square-${boardSquareId}`); 
    
    if (currentBoardSquare.getAttribute('marked') === 'false') {
      currentBoardSquare.innerHTML = `<h1 class="symbol">${currentPlayer.symbol}</h1>`;                         currentBoardSquare.setAttribute('marked', 'true');                     
    }
  
    if (boardSquareId < 3) {
      board[0][boardSquareId] = boardSquareId;
      currentPlayer.markedSquares[0][boardSquareId] = 1;
    } else if (boardSquareId < 6) {
      board[1][boardSquareId - 3] = boardSquareId;
      currentPlayer.markedSquares[1][boardSquareId - 3] = 1;
    } else if (boardSquareId < 9) {
      board[2][boardSquareId - 6] = boardSquareId;
      currentPlayer.markedSquares[2][boardSquareId - 6] = 1;
    }
   
    checkPlayerVictory(currentPlayer);
    
    togglePlayer();
    
  }
  
  function checkPlayerVictory(player) {
    
    let victory = false;
    
    if (isBoardClean() === false) {
      
      // Horizontal
      if ([currentPlayer.markedSquares[0][0], currentPlayer.markedSquares[0][1], currentPlayer.markedSquares[0][2]].equals([1, 1, 1])) {
        victory = true;
      }
      
      else if ([currentPlayer.markedSquares[1][0], currentPlayer.markedSquares[1][1], currentPlayer.markedSquares[1][2]].equals([1, 1, 1])) {
        victory = true;
      }
      
      else if ([currentPlayer.markedSquares[2][0], currentPlayer.markedSquares[2][1], currentPlayer.markedSquares[2][2]].equals([1, 1, 1])) {
        victory = true;
      }
      
      // Vertical
      else if ([currentPlayer.markedSquares[0][0], currentPlayer.markedSquares[1][0], currentPlayer.markedSquares[2][0]].equals([1, 1, 1])) {
        victory = true;
      }
      
      else if ([currentPlayer.markedSquares[0][1], currentPlayer.markedSquares[1][1], currentPlayer.markedSquares[2][1]].equals([1, 1, 1])) {
        victory = true;
      }
      
      else if ([currentPlayer.markedSquares[0][2], currentPlayer.markedSquares[1][2], currentPlayer.markedSquares[2][2]].equals([1, 1, 1])) {
        victory = true;
      }
      
      // Diagonal
      else if ([currentPlayer.markedSquares[0][0], currentPlayer.markedSquares[1][1], currentPlayer.markedSquares[2][2]].equals([1, 1, 1])) {
        victory = true;
      }
      
      else if ([currentPlayer.markedSquares[0][2], currentPlayer.markedSquares[1][1], currentPlayer.markedSquares[2][0]].equals([1, 1, 1])) {
        victory = true;
      }
    }
    
    if (victory) {
      alert(`${currentPlayer === p1 ? 'Jogador 1 (X)' : 'Jogador 2 (O)'} venceu!`);
      restartGame();
    } 
    
    else if (isBoardFullyFilled()) {
      alert('Empate!');
      restartGame();
    }
  }