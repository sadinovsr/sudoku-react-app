import React from 'react'
import { shallow } from 'enzyme';
import { HistoryListContainer } from '../../containers/HistoryListContainer';

describe('<HistoryListContainer />', () => {
  it('should render and call getDividedHistoryEntries()', () => {
    const getDividedHistoryEntries = jest.fn();
    shallow(<HistoryListContainer getDividedHistoryEntries={getDividedHistoryEntries} />);
    expect(getDividedHistoryEntries).toHaveBeenCalledTimes(1);
  });
  it('should render HistoryList component', () => {
    const getDividedHistoryEntries = jest.fn();
    const dividedHistory = 'dividedHistory';
    const wrapper = shallow(<HistoryListContainer getDividedHistoryEntries={getDividedHistoryEntries} dividedHistory={dividedHistory} />);
    expect(getDividedHistoryEntries).toHaveBeenCalledTimes(1);
    expect(wrapper.exists('HistoryList')).toBe(true);
  });
  it('should call history.push on redirectToSudoku()', () => {
    const getDividedHistoryEntries = jest.fn();
    const push = jest.fn()
    const wrapper = shallow(<HistoryListContainer history={{push: push}} getDividedHistoryEntries={getDividedHistoryEntries} />);
    const instance = wrapper.instance();
    expect(getDividedHistoryEntries).toHaveBeenCalledTimes(1);
    instance.redirectToSudoku('sudoku', 'historyEntry');
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ pathname: '/sudoku', state: { sudoku: 'sudoku', historyEntry: 'historyEntry', fromHistory: true } });
  });
})