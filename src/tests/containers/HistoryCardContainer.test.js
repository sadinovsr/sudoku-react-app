import React from 'react'
import { shallow } from 'enzyme';
import { HistoryCardContainer } from '../../containers/HistoryCardContainer';

describe('<SudokuGrid />', () => {
  it('should render', () => {
    shallow(<HistoryCardContainer />)
  });
  it('should render history card', () => {
    const historyEntry = {
      history: 'history',
    };
    const wrapper = shallow(<HistoryCardContainer historyEntry={historyEntry} />);
    expect(wrapper.exists('HistoryCard')).toBe(true);
  });
  it('should call getsudoku and redirect on onContinue()', async () => {
    const getSudoku = jest.fn().mockImplementation(() => Promise.resolve());
    const redirectToSudoku = jest.fn();
    const historyEntry = {
      sudokuId: 'sudokuId',
    };
    const wrapper = shallow(<HistoryCardContainer historyEntry={historyEntry} getSudoku={getSudoku} redirectToSudoku={redirectToSudoku} />)
    const instance = wrapper.instance();
    await instance.onContinue(historyEntry);
    expect(getSudoku).toHaveBeenCalledTimes(1);
    expect(redirectToSudoku).toHaveBeenCalledTimes(1);
  });
  it('should not call getsudoku and redirect on onContinue()', async () => {
    const getSudoku = jest.fn().mockImplementation(() => Promise.resolve());
    const redirectToSudoku = jest.fn();
    const wrapper = shallow(<HistoryCardContainer getSudoku={getSudoku} redirectToSudoku={redirectToSudoku} />)
    const instance = wrapper.instance();
    await instance.onContinue();
    expect(getSudoku).toHaveBeenCalledTimes(0);
    expect(redirectToSudoku).toHaveBeenCalledTimes(0);
  });
  it('should call getsudoku and not redirect on onContinue()', async () => {
    console.error = jest.fn();
    const historyEntry = {
      sudokuId: 'sudokuId',
    };
    const getSudoku = jest.fn().mockImplementation(() => Promise.reject('errorMessage'));
    const redirectToSudoku = jest.fn();
    const wrapper = shallow(<HistoryCardContainer historyEntry={historyEntry} getSudoku={getSudoku} redirectToSudoku={redirectToSudoku} />)
    const instance = wrapper.instance();
    await instance.onContinue(historyEntry);
    expect(getSudoku).toHaveBeenCalledTimes(1);
    expect(redirectToSudoku).toHaveBeenCalledTimes(0);
  });
})