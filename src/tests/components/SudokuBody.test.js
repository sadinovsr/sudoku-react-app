import React from 'react'
import { shallow } from 'enzyme';
import SudokuBody from '../../components/SudokuBody/SudokuBody';

describe('<SudokuBody />', () => {
  it('Component renders', () => {
    shallow(<SudokuBody />);
  })
  it('Component renders from history entry', () => {
    const historyEntry = {};
    const sudoku = {};

    shallow(<SudokuBody historyEntry={historyEntry} sudoku={sudoku}/>);
  })
})