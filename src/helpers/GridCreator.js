export const gridCreator = sudoku => {
  const sudokuArray = sudoku.split('');
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ,'I'];
  const grid = {};
  let counter = 0;
  let temp;
  
  for ( let i = 0; i < 9; i++ ) {
    for ( let j = 0; j < 9; j++ ) {
      temp = rows[i] + columns[j];
      if ( parseInt(sudokuArray[counter]) === 0 ) {
        grid[temp] = '';
      } else {
        grid[temp] = sudokuArray[counter];
      }
      counter++;
    }
  }
  return grid;
}