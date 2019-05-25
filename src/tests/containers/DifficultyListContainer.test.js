import React from 'react'
import { shallow } from 'enzyme';
import { DifficultyListContainer } from '../../containers/DifficultyListContainer';

describe('<DifficultyListcontainer />', () => {
  it('should render DifficultyList component', () => {
    const wrapper = shallow(<DifficultyListContainer />);
    expect(wrapper.exists('DifficultyList')).toBe(true);
  });
  it('should call history.push() with object unauthorized', async () => {
    const getRandomizedSudokuByDifficulty = jest.fn().mockImplementation(() => Promise.resolve());
    const push = jest.fn();
    const sudoku = 'sudoku';
    const object = {
      pathname: '/sudoku',
      state: { sudoku: 'sudoku' }
    };
    const wrapper = shallow(<DifficultyListContainer sudoku={sudoku} history={{push}} getRandomizedSudokuByDifficulty={getRandomizedSudokuByDifficulty} />)
    const instance = wrapper.instance();
    await instance.onDifficultySelect('difficulty');
    expect(getRandomizedSudokuByDifficulty).toHaveBeenCalledWith('difficulty');
    expect(getRandomizedSudokuByDifficulty).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(object);
  });
  it('should not call history.push() with object unauthorized', async () => {
    const getRandomizedSudokuByDifficulty = jest.fn().mockImplementation(() => Promise.reject('errorMessage'));
    console.error = jest.fn();
    const push = jest.fn();
    const wrapper = shallow(<DifficultyListContainer history={{push}} getRandomizedSudokuByDifficulty={getRandomizedSudokuByDifficulty} />)
    const instance = wrapper.instance();
    await instance.onDifficultySelect('difficulty');
    expect(getRandomizedSudokuByDifficulty).toHaveBeenCalledWith('difficulty');
    expect(getRandomizedSudokuByDifficulty).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledTimes(0);
  });
  it('should call history.push() with object authorized', async () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const getAuthorizedRandomizedSudokuByDifficulty = jest.fn().mockImplementation(() => Promise.resolve());
    const push = jest.fn();
    const sudokuAuth = 'sudokuAuth';
    const object = {
      pathname: '/sudoku',
      state: { sudoku: 'sudokuAuth' }
    };
    const wrapper = shallow(<DifficultyListContainer sudokuAuth={sudokuAuth} history={{push}} getAuthorizedRandomizedSudokuByDifficulty={getAuthorizedRandomizedSudokuByDifficulty} />)
    const instance = wrapper.instance();
    await instance.onDifficultySelect('difficulty');
    expect(getAuthorizedRandomizedSudokuByDifficulty).toHaveBeenCalledWith('difficulty');
    expect(getAuthorizedRandomizedSudokuByDifficulty).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(object);
  });
  it('should call history.push() with errorMessage object authorized', async () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const getAuthorizedRandomizedSudokuByDifficulty = jest.fn().mockImplementation(() => Promise.resolve());
    const push = jest.fn();
    const sudokuAuth = null;
    const object = {
      pathname: '/sudoku',
      state: { errorMessage: 'You have started/solved all difficulty sudokus!' }
    };
    const wrapper = shallow(<DifficultyListContainer sudokuAuth={sudokuAuth} history={{push}} getAuthorizedRandomizedSudokuByDifficulty={getAuthorizedRandomizedSudokuByDifficulty} />)
    const instance = wrapper.instance();
    await instance.onDifficultySelect('difficulty');
    expect(getAuthorizedRandomizedSudokuByDifficulty).toHaveBeenCalledWith('difficulty');
    expect(getAuthorizedRandomizedSudokuByDifficulty).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(object);
  });
  it('should not call history.push() with object unauthorized', async () => {
    const getAuthorizedRandomizedSudokuByDifficulty = jest.fn().mockImplementation(() => Promise.reject('errorMessage'));
    console.error = jest.fn();
    const push = jest.fn();
    const wrapper = shallow(<DifficultyListContainer history={{push}} getAuthorizedRandomizedSudokuByDifficulty={getAuthorizedRandomizedSudokuByDifficulty} />)
    const instance = wrapper.instance();
    await instance.onDifficultySelect('difficulty');
    expect(getAuthorizedRandomizedSudokuByDifficulty).toHaveBeenCalledWith('difficulty');
    expect(getAuthorizedRandomizedSudokuByDifficulty).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledTimes(0);
  });
})