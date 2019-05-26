import React from 'react'
import { shallow } from 'enzyme';
import SudokuGrid from '../../components/SudokuGrid/SudokuGrid';
import * as SolveSudoku from '../../helpers/SudokuSolver';
import * as GridCreator from '../../helpers/GridCreator';
import * as ObjectToString from '../../helpers/ObjectToString';
import * as SudokuChecker from '../../helpers/SudokuChecker';

describe('<SudokuGrid />', () => {
  it('Component renders', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    }
    shallow(<SudokuGrid sudoku={sudoku}/>);
  });
  it('should solve sudoku without authorization', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    }
    SolveSudoku.solveSudoku = jest.fn(() => true);
    GridCreator.gridCreator = jest.fn(() => 'newGrid');
    const onChangeSave = jest.fn();
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} onChangeSave={onChangeSave} />);
    const instance = wrapper.instance();
    wrapper.setState({ gridObj: 'gridObj', doUpdates: true });
    expect(wrapper.state('gridObj')).toBe('gridObj');
    expect(wrapper.state('doUpdates')).toBe(true);
    instance.onSolve();
    expect(wrapper.state('gridObj')).toBe('newGrid');
    expect(wrapper.state('doUpdates')).toBe(false);
    expect(SolveSudoku.solveSudoku).toHaveBeenCalledTimes(1);
    expect(GridCreator.gridCreator).toHaveBeenCalledTimes(3);
    expect(onChangeSave).toHaveBeenCalledTimes(0);
  });
  it('should solve sudoku with authorization', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    }
    Storage.prototype.getItem = jest.fn(() => 'token');
    SolveSudoku.solveSudoku = jest.fn(() => true);
    GridCreator.gridCreator = jest.fn(() => 'newGrid');
    ObjectToString.objectToString = jest.fn(() => 'string')
    const onChangeSave = jest.fn();
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} onChangeSave={onChangeSave} />);
    const instance = wrapper.instance();
    wrapper.setState({ gridObj: 'gridObj', doUpdates: true });
    expect(wrapper.state('gridObj')).toBe('gridObj');
    expect(wrapper.state('doUpdates')).toBe(true);
    instance.onSolve();
    expect(wrapper.state('gridObj')).toBe('newGrid');
    expect(wrapper.state('doUpdates')).toBe(false);
    expect(SolveSudoku.solveSudoku).toHaveBeenCalledTimes(1);
    expect(GridCreator.gridCreator).toHaveBeenCalledTimes(3);
    expect(onChangeSave).toHaveBeenCalledTimes(1);
  });
  it('should check sudoku without authorization', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    }
    SudokuChecker.sudokuChecker = jest.fn(() => true);
    Storage.prototype.getItem = jest.fn(() => null);
    const onChangeSave = jest.fn();
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} onChangeSave={onChangeSave} />);
    const instance = wrapper.instance();
    expect(wrapper.state('isChecked')).toBe(false);
    expect(wrapper.state('isCorrect')).toBe(false);
    expect(wrapper.state('doUpdates')).toBe(true);
    instance.onCheck();
    expect(wrapper.state('isChecked')).toBe(true);
    expect(wrapper.state('isCorrect')).toBe(true);
    expect(wrapper.state('doUpdates')).toBe(false);
    expect(onChangeSave).toHaveBeenCalledTimes(0);
    expect(SudokuChecker.sudokuChecker).toHaveBeenCalledTimes(1);
  });
  it('should check sudoku with authorization', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    }
    SudokuChecker.sudokuChecker = jest.fn(() => true);
    Storage.prototype.getItem = jest.fn(() => 'token');
    const onChangeSave = jest.fn();
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} onChangeSave={onChangeSave} />);
    const instance = wrapper.instance();
    expect(wrapper.state('isChecked')).toBe(false);
    expect(wrapper.state('isCorrect')).toBe(false);
    expect(wrapper.state('doUpdates')).toBe(true);
    instance.onCheck();
    expect(wrapper.state('isChecked')).toBe(true);
    expect(wrapper.state('isCorrect')).toBe(true);
    expect(wrapper.state('doUpdates')).toBe(false);
    expect(onChangeSave).toHaveBeenCalledTimes(1);
    expect(SudokuChecker.sudokuChecker).toHaveBeenCalledTimes(1);
  });
  it('should not call onChangeSave with incorrect check', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    }
    SudokuChecker.sudokuChecker = jest.fn(() => false);
    Storage.prototype.getItem = jest.fn(() => 'token');
    const onChangeSave = jest.fn();
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} onChangeSave={onChangeSave} />);
    const instance = wrapper.instance();
    expect(wrapper.state('isChecked')).toBe(false);
    expect(wrapper.state('isCorrect')).toBe(false);
    expect(wrapper.state('doUpdates')).toBe(true);
    instance.onCheck();
    expect(wrapper.state('isChecked')).toBe(true);
    expect(wrapper.state('isCorrect')).toBe(false);
    expect(wrapper.state('doUpdates')).toBe(true);
    expect(onChangeSave).toHaveBeenCalledTimes(0);
    expect(SudokuChecker.sudokuChecker).toHaveBeenCalledTimes(1);
  });
  it('should not update state on incorrect input change', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    };
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} />);
    const instance = wrapper.instance();
    const element = {
      target: {
        name: 'A1',
        value: 0,
      }
    }
    wrapper.setState({ gridObj: { A1: '', A2: '' } })
    expect(wrapper.state('gridObj')).toHaveProperty('A1', '');
    instance.onInputChange(element);
    expect(wrapper.state('gridObj')).toHaveProperty('A1', '');
  });
  it('should update state on correct input change unauthorized', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    };
    Storage.prototype.getItem = jest.fn(() => null);
    const onChangeSave = jest.fn();
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} onChangeSave={onChangeSave} />);
    const instance = wrapper.instance();
    const element = {
      target: {
        name: 'A1',
        value: 1,
      }
    }
    wrapper.setState({ gridObj: { A1: '', A2: '' } })
    expect(wrapper.state('gridObj')).toHaveProperty('A1', '');
    instance.onInputChange(element);
    expect(wrapper.state('gridObj')).toHaveProperty('A1', 1);
  });
  it('should update state on correct input change authorized', () => {
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    };
    Storage.prototype.getItem = jest.fn(() => 'token');
    ObjectToString.objectToString = jest.fn(() => 'string')
    const onChangeSave = jest.fn();
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} onChangeSave={onChangeSave} />);
    const instance = wrapper.instance();
    const element = {
      target: {
        name: 'A1',
        value: 1,
      }
    }
    wrapper.setState({ gridObj: { A1: '', A2: '' }, timer: 1 })
    expect(wrapper.state('gridObj')).toHaveProperty('A1', '');
    expect(wrapper.state('timer')).toBe(1);
    instance.onInputChange(element);
    expect(wrapper.state('gridObj')).toHaveProperty('A1', 1);
    expect(wrapper.state('timer')).toBe(1);
    expect(onChangeSave).toHaveBeenCalledTimes(1);
  });
  it('should set state with history entry data', () => {
    const historyEntry = {
      time: 5,
      answer: 'answer'
    };
    const sudoku = {
      _id: '_id',
      sudoku: 'sudoku',
    };
    GridCreator.gridCreator = jest.fn(() => 'historyGrid');
    const wrapper = shallow(<SudokuGrid sudoku={sudoku} historyEntry={historyEntry} /> );
    expect(wrapper.state('timer')).toBe(5);
    expect(wrapper.state('gridObj')).toBe('historyGrid');
  });
  it('should clear interval when unmounting', () => {
    
  })
})