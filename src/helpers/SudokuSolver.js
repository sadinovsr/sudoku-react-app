import { objectToString } from './ObjectToString';

const makeBoard = gridObject => {
  let gridString = objectToString(gridObject);
  let gridArray = gridString.split('');
  let chunk = 9;
  let newArray = [];
  for (let i = 0; i < gridArray.length; i+=chunk) {
      newArray.push(gridArray.slice(i,i+chunk));
  }
  return newArray;
};

const saveEmptyPositions = (board) => {
  let emptyPositions = [];
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(parseInt(board[i][j]) === 0) {
        emptyPositions.push([i, j]);
      }
    }
  }
  return emptyPositions;
};

const checkRow = (board, row, value) => {
  for(let i = 0; i < board[row].length; i++) {
    if(parseInt(board[row][i]) === value) {
      return false;
    }
  }
  return true;
};

const checkColumn = (board, column, value) => {
  for(let i = 0; i < board.length; i++) {
    if(parseInt(board[i][column]) === value) {
      return false;
    }
  }
  return true;
};

const check3x3Square = (board, column, row, value) => {
  let columnCorner = 0,
      rowCorner = 0,
      squareSize = 3;
  while(column >= columnCorner + squareSize) {
    columnCorner += squareSize;
  }
  while(row >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }
  for(let i = rowCorner; i < rowCorner + squareSize; i++) {
    for(let j = columnCorner; j < columnCorner + squareSize; j++) {
      if(parseInt(board[i][j]) === value) {        
        return false;
      }
    }
  }
  return true;
};

const checkValue = (board, column, row, value) => {
  if(checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    check3x3Square(board, column, row, value)) {
    return true;
  } else {
    return false;
  }
};

const solvePuzzle = (board, emptyPositions) => {
  let limit = 9;
  let row, column, value, found;
  for(let i = 0; i < emptyPositions.length;) {
    row = emptyPositions[i][0];
    column = emptyPositions[i][1];
    value = parseInt(board[row][column]) + 1;
    found = false;
    while(!found && value <= limit) {
      if(checkValue(board, column, row, value)) {
        found = true;
        board[row][column] = value;
        i++;
      } 
      else {
        value++;
      }
    }
    if(!found) {
      board[row][column] = 0;
      i--;
    }
  }
  return board;
};

const arrayToString = array => {
  let output = '';
  array.forEach(subArray => {
    subArray.forEach(elem => {
      output += elem;
    });
  });
  return output;
}

export const solveSudoku = object => {
  let board = makeBoard(object);
  let emptyPositions = saveEmptyPositions(board);
  let solvedPuzzle = solvePuzzle(board, emptyPositions);
  return arrayToString(solvedPuzzle);
};