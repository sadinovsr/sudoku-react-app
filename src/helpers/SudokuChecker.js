function hasDuplicates(array) {
  let valuesSoFar = {};
  for (let i = 0; i < array.length; i++) {
      let value = array[i];
      if (value in valuesSoFar) {
          return true;
      }
      valuesSoFar[value] = true;
  }
  return false;
}

export const sudokuChecker = ( sudoku, fromAdd ) => {
  const boxes = {
    1: ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'],
    2: ['A4', 'A5', 'A6', 'B4', 'B5', 'B6', 'C4', 'C5', 'C6'],
    3: ['A7', 'A8', 'A9', 'B7', 'B8', 'B9', 'C7', 'C8', 'C9'],
    4: ['D1', 'D2', 'D3', 'E1', 'E2', 'E3', 'F1', 'F2', 'F3'],
    5: ['D4', 'D5', 'D6', 'E4', 'E5', 'E6', 'F4', 'F5', 'F6'],
    6: ['D7', 'D8', 'D9', 'E7', 'E8', 'E9', 'F7', 'F8', 'F9'],
    7: ['G1', 'G2', 'G3', 'H1', 'H2', 'H3', 'I1', 'I2', 'I3'],
    8: ['G4', 'G5', 'G6', 'H4', 'H5', 'H6', 'I4', 'I5', 'I6'],
    9: ['G7', 'G8', 'G9', 'H7', 'H8', 'H9', 'I7', 'I8', 'I9'],
  };
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  //First check boxes for duplicates
  for (let i = 1; i <= 9; i++) {
    let valueArr = [];
    boxes[i].forEach(cell => {
      if (sudoku[cell] < '1' || sudoku[cell] > '9') {
        return false;
      }
      valueArr.push(sudoku[cell]);
    });
    if ( hasDuplicates(valueArr) ) {
      return false;
    }
  }

  //Second check rows for duplicates
  for (let i = 0; i < 9; i++) {
    let valueArr = [];
    for (let j = 0; j < 9; j++) {
      if (sudoku[rows[i] + columns[j]] < '1' || sudoku[rows[i] + columns[j]] > '9') {
        if ( fromAdd ) {
          continue;
        } else {
          return false;
        }
      }
      valueArr.push(sudoku[rows[i] + columns[j]]);
    }
    if ( hasDuplicates(valueArr) ) {
      return false;
    }
  }

  //Third check columns for duplicates
  for (let i = 0; i < 9; i++) {
    let valueArr = [];
    for (let j = 0; j < 9; j++) {
      if (sudoku[rows[j] + columns[i]] < '1' || sudoku[rows[j] + columns[i]] > '9') {
        if ( fromAdd ) {
          continue;
        } else {
          return false;
        }
      }
      valueArr.push(sudoku[rows[j] + columns[i]]);
    }
    if ( hasDuplicates(valueArr) ) {
      return false;
    }
  }
  return true;
}