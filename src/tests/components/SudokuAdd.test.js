import React from 'react'
import { shallow } from 'enzyme';
import SudokuAdd from '../../components/SudokuAdd/SudokuAdd';
import * as SudokuChecker from '../../helpers/SudokuChecker';

describe('<SudokuAdd />', () => {
  it('Component renders', () => {
    shallow(<SudokuAdd />);
  })
  it('should update state on correct input change', () => {
    const wrapper = shallow(<SudokuAdd />);
    const instance = wrapper.instance();
    const element = {
      target: {
        name: 'A1',
        value: 1,
      }
    }
    expect(wrapper.state('gridObj')).toHaveProperty('A1', '');
    instance.onInputChange(element);
    expect(wrapper.state('gridObj')).toHaveProperty('A1', 1);
  });
  it('should not update state on incorrect input change', () => {
    const wrapper = shallow(<SudokuAdd />);
    const instance = wrapper.instance();
    const element = {
      target: {
        name: 'A1',
        value: 0,
      }
    }
    expect(wrapper.state('gridObj')).toHaveProperty('A1', '');
    instance.onInputChange(element);
    expect(wrapper.state('gridObj')).toHaveProperty('A1', '');
  });
  it('should update state on correct difficulty change', () => {
    const wrapper = shallow(<SudokuAdd />);
    const instance = wrapper.instance();
    const element = {
      target: {
        name: 'difficulty',
        value: 'medium',
      }
    }
    expect(wrapper.state('difficulty')).toBe('easy');
    instance.onDifficultyChange(element);
    expect(wrapper.state('difficulty')).toBe('medium');
  });
  it('should save sudoku and reset state', async () => {
    SudokuChecker.sudokuChecker = jest.fn().mockReturnValue(true);
    const onSave = jest.fn();
    const wrapper = shallow(<SudokuAdd onSave={onSave} />)
    const instance = wrapper.instance();
    wrapper.setState({ difficulty: 'difficulty' });
    expect(wrapper.state('difficulty')).toBe('difficulty');
    await instance.onSudokuSave();
    expect(wrapper.state('difficulty')).toBe('easy');
    expect(wrapper.state('errorMessage')).toBe(null);
    expect(onSave).toHaveBeenCalledTimes(1);
  });
  it('should not save sudoku and set errorMessage about duplicates', async () => {
    SudokuChecker.sudokuChecker = jest.fn().mockReturnValue(false);
    const onSave = jest.fn();
    const wrapper = shallow(<SudokuAdd onSave={onSave} />)
    const instance = wrapper.instance();
    wrapper.setState({ difficulty: 'difficulty' });
    expect(wrapper.state('difficulty')).toBe('difficulty');
    await instance.onSudokuSave();
    expect(wrapper.state('difficulty')).toBe('difficulty');
    expect(wrapper.state('errorMessage')).toBe('Sudoku has duplicates in either row/column/subgrid!');
    expect(onSave).toHaveBeenCalledTimes(0);
  });
  it('should not save sudoku and set errorMessage about difficulty', async () => {
    SudokuChecker.sudokuChecker = jest.fn().mockReturnValue(true);
    const onSave = jest.fn();
    const wrapper = shallow(<SudokuAdd onSave={onSave} />)
    const instance = wrapper.instance();
    wrapper.setState({ difficulty: '' });
    expect(wrapper.state('difficulty')).toBe('');
    await instance.onSudokuSave();
    expect(wrapper.state('difficulty')).toBe('');
    expect(wrapper.state('errorMessage')).toBe('Difficulty must be selected!');
    expect(onSave).toHaveBeenCalledTimes(0);
  });
  it('should change state on onOpenApproval() call', () => {
    const wrapper = shallow(<SudokuAdd />);
    const instance = wrapper.instance();
    expect(wrapper.state('isApprovalOpen')).toBe(false);
    instance.onOpenApproval();
    expect(wrapper.state('isApprovalOpen')).toBe(true);
  });
  it('should change state on onCloseApproval() call', () => {
    const wrapper = shallow(<SudokuAdd />);
    const instance = wrapper.instance();
    wrapper.setState({ isApprovalOpen: true });
    expect(wrapper.state('isApprovalOpen')).toBe(true);
    instance.onCloseApproval();
    expect(wrapper.state('isApprovalOpen')).toBe(false);
  });
})