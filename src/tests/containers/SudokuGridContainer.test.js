import React from 'react'
import { shallow } from 'enzyme';
import { SudokuGridContainer } from '../../containers/SudokuGridContainer';

describe('<SudokuGridContainer />', () => {
  it('should render without SudokuGrid component', () => {
    shallow(<SudokuGridContainer />);
  });
  it('should render SudokuGrid component from history', () => {
    const historyEntry = 'historyEntry';
    const sudoku = 'sudoku';
    const wrapper = shallow(<SudokuGridContainer historyEntry={historyEntry} sudoku={sudoku} />);
    expect(wrapper.exists('SudokuGrid')).toBe(true);
  });
  it('should render SudokuGrid component not from history', () => {
    const sudoku = 'sudoku';
    const wrapper = shallow(<SudokuGridContainer sudoku={sudoku} />);
    expect(wrapper.exists('SudokuGrid')).toBe(true);
  });
  it('should call updateHistoryEntry() on onChangeSave()', () => {
    const updateHistoryEntry = jest.fn();
    const wrapper = shallow(<SudokuGridContainer updateHistoryEntry={updateHistoryEntry} />);
    const instance = wrapper.instance();
    instance.onChangeSave('sudokuId', 'newSudoku');
    expect(updateHistoryEntry).toHaveBeenCalledTimes(1);
    expect(updateHistoryEntry).toHaveBeenCalledWith('sudokuId', 'newSudoku');
  });
})