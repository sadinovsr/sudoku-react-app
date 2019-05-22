import React from 'react'
import { shallow } from 'enzyme';
import SudokuGrid from '../../components/SudokuGrid/SudokuGrid';

describe('<SudokuGrid />', () => {
  it('Component renders', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    }
    shallow(<SudokuGrid sudoku={sudoku}/>);
  })
})